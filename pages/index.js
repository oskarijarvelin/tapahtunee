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
    borderBottom: '1px dashed #999',
    cursor: 'help'
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
            <i className={classes.potentiaali}>Tapahtunee</i> tarkoittaa tapahtua-verbin nykykielessä harvinaista modusta: <i>potentiaalia</i> eli mahtotapaa. Potentiaali ilmaisee viestijän pitävän käsittelemäänsä asiaa mahdollisena tai todennäköisenä, mutta ei varmana.
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            Nyt <i className={classes.potentiaali}>Tapahtunee</i> on myös laajasti tapahtuma-alaa käsittelevä Oululainen podcast koronapandemian keskeltä, missä tapahtumista voidaan puhua vain mahdollisina tai todennäköisinä, mutta ei varmoina.
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            Podcast <i className={classes.potentiaali}>antanee</i> äänen tapahtumien tekijöille sekä heidän osaamiselleen. Podcastin vieraina <i className={classes.potentiaali}>kuultaneen</i> yksittäisiä Oululaisia tai Oulusta lähtöisin olevia tapahtuma-alan toimijoita koko toimialan laajuudelta.
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            Jokaisessa jaksossa <i className={classes.potentiaali}>selvitettäneen</i> jakson vierailta mitä he tekivät ennen koronaa, miten pandemia rajoituksineen on vaikuttanut juuri heidän toimintaansa sekä ennen kaikkea sitä millä keinoin he aikovat selviytyä pandemian yli kohti Euroopan kulttuuripääkaupunkivuotta 2026.
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            Podcastissa <i className={classes.potentiaali}>osoitettaneen</i> ettei tapahtuma-ala jää tuleen makaamaan vaan etsii yhdessä selviytymiskeinoja, antaa vertaistukea ja inspiroi uuden liiketoiminnan rakentamisessa - pohjoisten tapahtumien tekijöiltä pohjoisten tapahtumien tekijöille. 
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="h4" component="h2">
            Tuotantokausi 1 saapuu syksyllä 2021
          </Typography>
        </Box>

        <Box pb={4}>
          <Typography variant="body2">
            Pilottijakso <i className={classes.potentiaali}>julkaistaneen</i> podcast-alustoilla perjantaina 3.9.2021. Uutta jaksoa <i className={classes.potentiaali}>ilmestynee</i> aina kahden viikon välein jouluun asti.
          </Typography>
        </Box>

        <Box pb={6}>
          <Typography variant="body2">
            Ensimmäisellä tuotantokaudella podcastin vieraina <i className={classes.potentiaali}>kuultaneen</i> Oululaisia tai Oulusta lähtöisin olevia freelancereita, artisteja, tapahtumajärjestäjiä, ohjelmatoimistoja sekä alan opiskelijoita. Listaa täydennetään vieraiden varmistuttua kesän aikana.
          </Typography>
        </Box>
      </Container>

    </Layout>
  );
}