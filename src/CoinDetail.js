import React from 'react';
import { Typography, CssBaseline, Container } from '@material-ui/core';
import { useHistory, HashRouter as Router, Route } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import useStyles from './styles.js';




function CoinDetail() {

    const navBack = () => {
        history.push('/')
    }

    const history = useHistory();
    const classes = useStyles();

    return (
        <Container>
            <Typography>BEEF PANTS!!!!</Typography>
            <Button variant="contained" onClick={() => navBack()}>Go Back</Button>
        </Container>
    );
}

export default CoinDetail;