import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Link as MuiLink, Fab } from '@material-ui/core';
import Link from 'next/link';

import ListIcon from '@material-ui/icons/List';
import YoutubeIcon from '@material-ui/icons/YouTube';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({

    mainMenu: {
        display: 'flex',
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
    mobileMenuItem: {
        padding: 0,
    },
    mobileMenuLink: {
        alignItems: 'center',
        display: 'flex',
        fontFamily: 'Roboto Condensed',
        justifyContent: 'flex-start',
        padding: '16px 24px 16px 16px!important;',
        transition: 'background-color .3s ease',
        width: '100%',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,.02)',
            textDecoration: 'none'
        }
    },
    currentMobileMenuLink: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.12)',
        display: 'flex',
        fontFamily: 'Roboto Condensed',
        justifyContent: 'flex-start',
        padding: '16px 24px 16px 16px!important;',
        width: '100%',
        '&:hover': {
            textDecoration: 'none'
        }
    },
    iconButton: {
        borderRadius: '50%',
        marginLeft: theme.spacing(0),
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,.12)',
            textDecoration: 'none'
        }
    },
    menuIcon: {
        marginLeft: theme.spacing(2),
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,.12)',
            textDecoration: 'none'
        }
    },
    appBar: {
        top: 'auto',
        bottom: 0,
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

    const nav = {
        "navItems": [{
            "id": 0,
            "url": "/jaksot",
            "title": "Jaksot",
            "icon": ListIcon
        }]
    };

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>

                {nav.navItems.map((navItem) => { 
                    const Icon = navItem.icon;
                    return (
                        <Link key={navItem.id} href={navItem.url} passHref>
                            <MuiLink color="inherit" className={(router.pathname === navItem.url ? classes.currentMenuItem : classes.menuItem)} href={navItem.url}>
                                <Icon className={classes.menuItemIcon} />
                                {navItem.title}
                            </MuiLink>
                        </Link>
                    )
                })}

                <Fab color="secondary" aria-label="Kuuntele" className={classes.fabButton} >
                    <PlayArrowIcon fontSize="large" />
                </Fab>

                <div className={classes.grow} />

                <IconButton edge="end" color="inherit" className={classes.iconButton} href="#" target="_blank" rel="noopener" title="#">
                    <YoutubeIcon />
                </IconButton>

            </Toolbar>
        </AppBar>
    );
}