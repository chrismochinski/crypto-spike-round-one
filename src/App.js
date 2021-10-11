import './App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import CoinTableHead from './CoinTableHead';
import Footer from './Footer';
import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';




// import useStyles from './styles.js';
import CoinDetail from './CoinDetail.js';


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false


function App() {

  // const classes = useStyles();





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
            <SearchForm />
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
