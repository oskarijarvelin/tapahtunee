import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  copyright: {
    fontSize: 14,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box pt={{xs:6, md:12}} pb={16}>
      <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
        {'Copyright © '}
        {new Date().getFullYear()}{' '}
        Tapahtunee
        {'.'}
      </Typography>
    </Box>
  );
}