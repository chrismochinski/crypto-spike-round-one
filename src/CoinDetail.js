import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
// import useStyles from './styles.js';




function CoinDetail() {

    const navBack = () => {
        history.push('/')
    }

    const history = useHistory();
    // const classes = useStyles();

    return (
        <Container>
            <Typography variant="h2">Coin Detail Page</Typography>
            <Button variant="contained" onClick={() => navBack()}>Go Back</Button>
        </Container>
    );
}

export default CoinDetail;