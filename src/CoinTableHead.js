import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Typography, Grid, Container } from '@material-ui/core';

import useStyles from './styles.js';
import Button from '@material-ui/core/Button';

import Table from "@material-ui/core/Table";
import TableContainer from '@mui/material/TableContainer';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


import Coin from './Coin.js';
import { useHistory } from 'react-router-dom';




function CoinTableHead() {

    const classes = useStyles();
    const [coins, setCoins] = useState([])
    const history = useHistory();


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
                console.log('Coin response is:', res.data);
            }).catch(error => console.log('error getting cryptos:', error))
    }, []);


    const shortenBigNumber = (value) => {
        const suffixes = ["", "K", "M", "B", "T"];
        let suffixNum = Math.floor(("" + value).length / 3);
        let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(4));
        if (shortValue % 1 !== 0) {
            shortValue = shortValue.toFixed(2);
        }
        return shortValue + suffixes[suffixNum];
    }

    const handleAddClick = () => {
        console.log('add button clicked')
        history.push('/coin-search')
    }



    return (
        <Container className={classes.tableMain}>
            <Paper className={classes.assetHeader} elevation={10}>
                <Grid container spacing={2}>
                    <Grid item className={classes.assetHeadline} xs={12} s={10} md={10} lg={10} xl={10}>
                        <Typography variant="h4" style={{color: '#F70C8A'}}>No Assets Yet</Typography>
                    </Grid>
                    <Grid item className={classes.addButton} xs={12} s={2} md={2} lg={2} xl={2}>
                        <Button 
                        variant="outlined" 
                        size="small" 
                        onClick={handleAddClick}
                        style={{backgroundColor: '#3f51b5', color: 'white'}}><b>Add</b></Button>
                    </Grid>
                </Grid>
            </Paper>





            <Paper elevation={6} sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 470 }}>
                    <Table className="center" stickyHeader aria-label="sticky table">
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <TableCell className={classes.tableCell}>Icon</TableCell>
                                <TableCell className={classes.tableCell}>Name</TableCell>
                                <TableCell className={classes.tableCell}>Ticker</TableCell>
                                <TableCell className={classes.tableCell}>Current Price</TableCell>
                                <TableCell className={classes.tableCell}>Market Cap</TableCell>
                                <TableCell className={classes.tableCell}>24h Price Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>


                            {coins.map(coin => {
                                return (
                                    <Coin key={coin.id}
                                        id={coin.id}
                                        image={coin.image}
                                        name={coin.name}
                                        symbol={coin.symbol}
                                        price={coin.current_price.toLocaleString()}
                                        marketCap={shortenBigNumber(coin.market_cap)}
                                        priceChange={coin.price_change_percentage_24h}
                                    />

                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    )
}

export default CoinTableHead;