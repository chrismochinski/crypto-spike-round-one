import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Typography, AppBar, CssBaseline, Container, Toolbar } from '@material-ui/core';
import { Info, Home } from '@material-ui/icons';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import Table from "@material-ui/core/Table";
import TableContainer from '@mui/material/TableContainer';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


import useStyles from './styles.js';
import Coin from './Coin.js';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false


function App() {

  const classes = useStyles();

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(error => console.log('error getting cryptos:', error))
  }, []);


  const handleChange = e => {
    setSearch(e.target.value)
  }


  // option 1 - large numbers have commas added
  //   function numberWithCommas(mc) {
  //     return mc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // found on StackOverflow (duh) - puts commas in
  // }

  //whoa...
  function shortenBigNumber(value) {
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
    <div className="coinApp">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.topLinks}>
          <Container className={classes.iconLinks}>
            <a href="https://localhost:3000" target="_blank"><Home /></a>
            <a href="https://www.coingecko.com/" target="_blank"><MonetizationOnIcon /></a>
            <a href="https://github.com/chrismochinski/material-ui-crash-course" target="_blank"><Info /></a>
          </Container>
          <Container className={classes.wordLinks}>
            <a className={classes.about}>About</a>
          </Container>
        </Toolbar>
        <Typography className={classes.title} variant="h4"><b>Mo's CoinGecko API Spike</b></Typography>
        <Typography className={classes.subtitle} variant="h6">Testing the CoinGecko API as well as implementing some of the Material UI stuff from my first spike</Typography>
      </AppBar>


      <main>
        <div>
          <Container maxWidth="sm" className={classes.main}>
            <Typography variant="h5">Search</Typography>
            <form>
              <input type="text" placeholder="search" className="coinInput" onChange={handleChange} />
            </form>
          </Container>
        </div>

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


        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Something here to give the footer a purpose
          </Typography>
        </footer>

      </main>

    </div >
  );
}

export default App;
