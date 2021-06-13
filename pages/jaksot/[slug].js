import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import Breadcrumbs from '../../components/Breadcrumbs'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { Container, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import markdownToHtml from '../../lib/markdownToHtml'

const useStyles = makeStyles((theme) => ({
  potentiaali: {
    borderBottom: '1px dashed #999'
  }
}));

export default function Jakso({ jakso }) {
  const classes = useStyles()
  const router = useRouter()

  if (!router.isFallback && !jakso?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout title={jakso.nimi} desc={jakso.ote} url={`/jaksot/` + jakso.slug} img={jakso.SeoKuva.url}>
        {router.isFallback ? (
          <Container maxWidth="sm">
            <Box pt={2} pb={4}>
              <Typography variant="h3" component="h1">
                Ladataan...
              </Typography>
            </Box>
          </Container>
        ) : (
          <>
          <Breadcrumbs parents={[{title: 'Jaksot', url: '/jaksot'}]} />

          <Container maxWidth="sm">
            <Box pt={2} pb={4}>
              <Typography variant="h3" component="h1">
                {jakso.SeoNimi}
              </Typography>
            </Box>

            <Box pb={4}>
              <div dangerouslySetInnerHTML={{__html: jakso.content}} />
            </Box>
          </Container>
          </>
        )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const jakso = getPostBySlug(params.slug, [
    'slug',
    'id',
    'nimi',
    'ote',
    'julkaisuaika',
    'kuva',
    'SeoKuva',
    'SeoNimi',
    'content',
  ])
  const content = await markdownToHtml(jakso.content || '')

  return {
    props: {
      jakso: {
        ...jakso,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const jaksot = getAllPosts(['slug'])

  return {
    paths: jaksot.map((jakso) => {
      return {
        params: {
          slug: jakso.slug,
        },
      }
    }),
    fallback: false,
  }
}