import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Link as MuiLink, Fab } from '@material-ui/core';
import Link from 'next/link';

import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    appbar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        margin: '0 auto',
        maxWidth: 640,
        padding: 0,
        width: '100%',
    },
    menuItem: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        fontFamily: 'Roboto Condensed',
        fontWeight: 700,
        justifyContent: 'center',
        padding: 20,
        transition: 'background-color .3s ease',
        '&:hover': {
            backgroundColor: 'rgba(248,245,242,.1)',
            textDecoration: 'none'
        }
    },
    currentMenuItem: {
        alignItems: 'center',
        backgroundColor: 'rgba(248,245,242,.3)',
        cursor: 'pointer',
        display: 'flex',
        fontFamily: 'Roboto Condensed',
        fontWeight: 700,
        justifyContent: 'center',
        padding: 20,
        '&:hover': {
            textDecoration: 'none'
        }
    },
    menuItemIcon: {
        marginRight: theme.spacing(1),
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        boxShadow: '0 0 0 4px #f8f5f2',
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const router = useRouter();

    return (
        <AppBar position="fixed" color="primary" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>

                <Link href="/" passHref>
                    <MuiLink color="inherit" className={(router.pathname === "/" ? classes.currentMenuItem : classes.menuItem)} href="/">
                        <HomeIcon className={classes.menuItemIcon} />
                        Etusivu
                    </MuiLink>
                </Link>

                <Fab color="secondary" aria-label="Kuuntele" className={classes.fabButton} title="Kuuntele Tapahtunee-podcastia">
                    <PlayArrowIcon fontSize="large" />
                </Fab>

                <div className={classes.grow} />

                <Link href="/jaksot" passHref>
                    <MuiLink color="inherit" className={(router.pathname === "/jaksot" ? classes.currentMenuItem : classes.menuItem)} href="/jaksot">
                        <ListIcon className={classes.menuItemIcon} />
                        Jaksot
                    </MuiLink>
                </Link>

            </Toolbar>
        </AppBar>
    );
}