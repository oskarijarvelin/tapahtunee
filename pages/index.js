import React from 'react';
import Layout from '../components/Layout';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundColor: 'rgba(0,0,0,.05)',
    boxShadow: '0 1px 4px 1px rgba(0,0,0,.15)',
    display: 'flex'
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'none'
  },
  potentiaali: {
    borderBottom: '1px dashed #999'
  }
}));
  
export default function Index() {
  const classes = useStyles();
  return (
    <Layout title="Tapahtunee - Oululainen tapahtuma-alan podcast" desc="" url="/" img="/hero-index.jpg">

      <Container maxWidth="sm">
        <Box pt={{xs:4, md:12}} pb={4}>
          <Typography variant="h3" component="h1">
            Tapahtunee
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            <i className={classes.potentiaali}>Tapahtunee</i> tarkoitti aiemmin tapahtua-verbin aktiivin potentiaalin preesensin yksikön 3. persoonan muotoa, joka ilmaisee viestijän pitävän käsittelemäänsä asiaa mahdollisena tai todennäköisenä, mutta ei varmana.
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            Nyt <i className={classes.potentiaali}>Tapahtunee</i> tarkoittaa myös Oululaista tapahtuma-alan podcastia korona-ajan todellisuudesta, jossa tapahtumista voidan puhua vain mahdollisina tai todennäköisinä, mutta ei varmoina.
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            Podcast ei <i className={classes.potentiaali}>ottane</i> kantaa poliittisiin päätöksiin, joiden takia koko tapahtuma-ala on syvässä ahdingossa. Podcast haluaa antaa äänen tapahtuma-alan toimijoille, kertoa heidän osaamisestaan ja tulevaisuuden suunnitelmistaan.
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            Podcastin ensimmäinen tuotantokausi <i className={classes.potentiaali}>kuultaneen</i> syksyllä 2021. Pilottijakso <i className={classes.potentiaali}>julkaistaneen</i> podcast-alustoilla perjantaina 3.9.2021. Uutta jaksoa <i className={classes.potentiaali}>ilmestynee</i> aina kahden viikon välein jouluun asti.
          </Typography>
        </Box>

        <Box pb={6}>
          <Typography variant="body2">
            Podcastin vieraina <i className={classes.potentiaali}>kuultaneen</i> Oululaisia tai Oulusta lähtöisin olevia tapahtuma-alan tekijöitä freelancereista artisteihin, tapahtumajärjestäjistä ohjelmatoimistoihin ja tapahtumapaikkojen omistajista tapahtuma-alan opiskelijoihin.
          </Typography>
        </Box>
      </Container>

    </Layout>
  );
}