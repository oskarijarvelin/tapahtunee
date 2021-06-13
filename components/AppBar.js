import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Box, Link as MuiLink, Menu, MenuItem } from '@material-ui/core';
import Link from 'next/link';

import ListIcon from '@material-ui/icons/List';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    titleLink: {
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    mainMenuBox: {
        flexGrow: 1,
    },
    socialMenuBox: {
        
    },
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
            backgroundColor: 'rgba(255,255,255,.1)',
            textDecoration: 'none'
        }
    },
    currentMenuItem: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,.3)',
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
    mobileMenuItemIcon: {
        marginRight: theme.spacing(2),
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
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const nav = {
        "navItems": [{
            "id": 0,
            "url": "/jaksot",
            "title": "Jaksot",
            "icon": ListIcon
        }]
    };

    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar>

                <Typography variant="h5" className={classes.title}>
                    <Link href="/" passHref>
                        <MuiLink color="inherit" href="/" className={classes.titleLink}>
                            Tapahtunee-podcast
                        </MuiLink>
                    </Link>
                </Typography>

                <Box display={{xs: "none", md: "block"}} className={classes.mainMenuBox}>
                    <Typography className={classes.mainMenu}>
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
                    </Typography>
                </Box>

                <Box className={classes.socialMenuBox}>
                    <IconButton edge="start" color="inherit" className={classes.iconButton} href="https://www.linkedin.com/in/oskarijarvelin/" target="_blank" rel="noopener" title="Oskari LinkedInissä">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton edge="start" color="inherit" className={classes.iconButton} href="https://github.com/oskarijarvelin" target="_blank" rel="noopener" title="Oskari GitHubissa">
                        <YoutubeIcon />
                    </IconButton>
                </Box>

                <Box display={{xs: "block", md: "none"}}>
                    <IconButton edge="start" color="inherit" className={classes.menuIcon} aria-label="Avaa päävalikko" aria-controls="menu" aria-haspopup="true" variant="contained" color="inherit" onClick={handleClick} >
                        <MenuIcon />
                    </IconButton>
                    <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} MenuListProps={{ disablePadding: true }}>
                        {nav.navItems.map((navItem) => { 
                            const Icon = navItem.icon;
                            return (
                                <MenuItem key={navItem.id} onClick={handleClose} className={classes.mobileMenuItem}>
                                    <Link href={navItem.url} passHref>
                                        <MuiLink color="inherit" className={(router.pathname === navItem.url ? classes.currentMobileMenuLink : classes.mobileMenuLink)}>
                                            <Icon className={classes.mobileMenuItemIcon} />
                                            {navItem.title}
                                        </MuiLink>
                                    </Link>
                                </MenuItem>
                            )
                        })}
                    </Menu>
                </Box>

            </Toolbar>
        </AppBar>
    );
}