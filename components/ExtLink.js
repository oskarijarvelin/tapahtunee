import React from 'react';
import Link from 'next/link';
import { Link as MuiLink } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: 700,
  }
}));

export default function ExtLink({href, children, color}) {
    const classes = useStyles();

    if ( !color ) {
      color = 'primary';
    }

    return (
        <Link href={href} passHref>
            <MuiLink className={classes.link} target="_blank" rel="noopener" color={color}>
                {children}
            </MuiLink>
        </Link>
    );
}