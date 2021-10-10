import './App.css';

import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import { Typography, CssBaseline, Container } from '@material-ui/core';
import useStyles from './styles.js';


function Footer() {

    const classes = useStyles();

    return (

        <footer className={classes.footer}>
          <Typography variant="h6" align="center">
            Footer
          </Typography>
          <Typography variant="subtitle2" align="center" color="textSecondary">
            Some sweet stuff here that is neat and great
          </Typography>
        </footer>

    )
}

export default Footer;