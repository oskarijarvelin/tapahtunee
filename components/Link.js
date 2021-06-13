import React from 'react';
import Link from 'next/link';
import { Link as MuiLink } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#223388'
  },
}));

export default function OwnLink({href, children}) {
    const classes = useStyles();
    return (
        <Link href={href} passHref>
            <MuiLink color="inherit" className={classes.link}>
                {children}
            </MuiLink>
        </Link>
    );
}