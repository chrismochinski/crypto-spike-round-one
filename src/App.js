import './App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import CoinTableHead from './CoinTableHead';
import CoinDetail from './CoinDetail.js';
import Footer from './Footer';
import { HashRouter as Router, Route, } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';




// https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false


function App() {

  // const classes = useStyles();

  const [coins, setCoins] = useState();


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data);
            console.log('Coin response is:', res.data);
        }).catch(error => console.log('error getting cryptos:', error))
}, []);




  return (
    <div className="coinApp">
      <main>
        <CssBaseline />



        <Router>

          <Header />

          <Route exact path="/coin-details" >
            <CoinDetail />
          </Route>

          <Route exact path="/coin-search">
            <SearchForm coins={coins}/>
          </Route>

          <Route exact path='/'>
            <CoinTableHead />
          </Route>

          <Footer />

        </Router>












      </main>

    </div >
  );
}

export default App;
