import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


import Table from "@material-ui/core/Table";
import TableContainer from '@mui/material/TableContainer';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


import useStyles from './styles.js';
import Coin from './Coin.js';




function CoinTableHead() {

    const classes = useStyles();

    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
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

    const filteredCoins = coins;


    return (

        <Paper elevation={6} sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table className="center" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Icon</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Ticker</TableCell>
                            <TableCell>Current Price</TableCell>
                            <TableCell>Market Cap</TableCell>
                            <TableCell>24h Price Change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {filteredCoins.map(coin => {
                            return (
                                <Coin
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

    )
}

export default CoinTableHead;