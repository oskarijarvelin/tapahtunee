import React from 'react';
import Moment from 'react-moment';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import { getAllPosts } from '../lib/api'
import { Container, Typography, Box, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundColor: 'rgba(0,0,0,.05)',
    boxShadow: '0 1px 4px 1px rgba(0,0,0,.15)',
    display: 'flex',
  },
  ops: {
    fontSize: 16,
  },
  thead: {
    backgroundColor: '#E0E0E0',
  },
  th: {
    backgroundColor: '#F2F2F2',
    borderTop: '1px solid',
  },
  td: {
    borderTop: '1px solid',
  },
  summary: {
    borderTop: '2px solid',
  }
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center" pt={2}>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography color="textSecondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function createData(id, nimi, aika, type) {
  return { id, nimi, aika, type};
}

const rows = [
  createData('', 'Tuotantokausi 1', '', 'th'),
  createData('1.1', 'Pilottijakso', '03.09.2021', 'td'),
  createData('1.2', 'TBA (#2)', '10.09.2021', 'td'),
  createData('1.3', 'TBA (#3)', '24.09.2021', 'td'),
  createData('1.4', 'TBA (#4)', '08.10.2021', 'td'),
  createData('1.5', 'TBA (#5)', '22.10.2021', 'td'),
  createData('1.6', 'TBA (#6)', '05.11.2021', 'td'),
  createData('1.7', 'TBA (#7)', '19.11.2021', 'td'),
  createData('1.8', 'TBA (#8)', '03.12.2021', 'td'),
  createData('1.9', 'Jouluspesiaali', '17.12.2021', 'td'),
];

export default function Jaksot({ jaksot }) {
  const classes = useStyles();
  return (
    <Layout title="Jaksot" desc="Podcastin uudet jaksot" url="/jaksot" img="/hero-jaksot.jpg">

      <Breadcrumbs parents={false} />

      <Container maxWidth="sm">
        <Box pt={1} pb={4}>
          <Typography variant="h3" component="h1">
            Jaksot
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography>
            Pilottijakso julkaistaan perjantaina 3.9.2021. Uusi jakso ilmestyy 10.9.2021 lähtien kahden viikon välein perjantaisin aina jouluun asti.
          </Typography>
        </Box>

        <Box py={2}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="Jaksojen julkaisuaikataulu">
              <TableHead className={classes.thead}>
                <TableRow>
                  <TableCell>
                    #
                  </TableCell>
                  <TableCell>
                    Jakson nimi
                  </TableCell>
                  <TableCell align="right">
                    Julkaisupäivä
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {jaksot.map((jakso, i) => (
                  <TableRow key={i} className={classes.td}>
                    {jakso.id !== '' &&
                      <TableCell component="td" scope="row">
                        {jakso.id}
                      </TableCell>
                    }
                    
                    <TableCell component="td">
                      <Link href={`/jaksot/` + jakso.slug}>
                        {jakso.nimi}
                      </Link>  
                    </TableCell>
                    <TableCell component="td" align="right">
                      <Moment format="DD.MM.YYYY">{jakso.julkaisuaika}</Moment>
                    </TableCell>
                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const jaksot = getAllPosts([
    'slug',
    'id',
    'nimi',
    'ote',
    'julkaisuaika',
  ])

  return {
    props: { jaksot },
  }
}