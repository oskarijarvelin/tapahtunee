import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Head from '../components/Head';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Box, Fab } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: 64,
    },
    fab: {
        fontFamily: 'Roboto Condensed',
        fontWeight: 700,
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabIcon: {
        marginRight: theme.spacing(1),
    }
}));

export default function Layout({title, desc, url, img, children}) {
    const classes = useStyles();
    return (
        <>
            <Head title={title} desc={desc} url={url} img={img} />

            <AppBar />
            <div className={classes.content} />

            {children}

            <Box display={{xs: "block", md: "none"}} className={classes.fabBox}>
                <Link href="tel:+358458983883">
                    <Fab color="primary" aria-label="soita" className={classes.fab}>
                        <PlayCircleOutlineIcon />
                    </Fab>
                </Link>
            </Box>

            <Box display={{xs: "none", md: "block"}} className={classes.fabBox}>
                <Link href="tel:+358458983883">
                    <Fab color="primary" variant="extended" className={classes.fab}>
                        <PlayCircleOutlineIcon className={classes.fabIcon} />
                        Kuuntele
                    </Fab>
                </Link>
            </Box>

            <Footer />
        </>
    );
    }