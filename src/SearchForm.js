import useStyles from './styles.js';
import React, { useState, useEffect } from 'react';
import { Typography, CssBaseline, Container, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import Paper from "@material-ui/core/Paper";
import axios from 'axios';





function SearchForm() {

    const classes = useStyles();

    const [coins, setCoins] = useState('');
    const [newSearch, setNewSearch] = useState('');
    const [newCoinName, setNewCoinName] = useState('');
    const [newCoinImageSource, setNewCoinImageSource] = useState('');
    const [search, setSearch] = useState('');

    let coinToRender = '';

    const handleChange = () => {
        console.log('new search is:', newSearch)
        for (let i = 0; i < coins.length; i++) {
            if (
                coins[i].id == newSearch ||
                coins[i].symbol == newSearch ||
                coins[i].name == newSearch ||
                coins[i].image == newSearch) {
                console.log(coins[i]);
            }
        }

    }


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
                console.log('Coin response is:', res.data);
            }).catch(error => console.log('error getting cryptos:', error))
    }, []);


    return (

        <div>
            <CssBaseline />
            <Paper elevation={1} className={classes.searchPaper}>
                <Container maxWidth="sm" className={classes.main}>
                    <Typography variant="h4" style={{ paddingBottom: '20px' }}>Crypto Search</Typography>
                    <form onSubmit={handleChange}>
                        <TextField
                            id="standard-basic"
                            variant="standard"
                            size="small"
                            type="text"
                            // helperText="Search For A Cryptocurrency"
                            className="coinInput"
                            label="Search For A Coin"
                            onChange={(event) => setNewSearch(event.target.value)}
                        />
                        <Button variant="contained" size="small" type="submit" style={{ marginLeft: '50px' }}>Go</Button>

                    </form>

                    <h1>{search}</h1>
                    <h1>{newCoinName}</h1>
                    <img src={newCoinImageSource} />
                </Container>
            </Paper>
        </div>
    )
}

export default SearchForm;



// const handleChange = event => {
//     event.preventDefault();
//     console.log('add button clicked:', newSearch)
//     axios.get(`https://api.coingecko.com/api/v3/coins/${newSearch}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`)
//         .then(res => {
//             console.log(res.data);
//             setNewCoinName(res.data.name);
//             setNewCoinImageSource(res.data.image.small);
//         }).catch(error => console.log('error getting cryptos:', error))
// }


    // const finalizeSearch = (response) => {
    //     console.log('the response was:', response)
    //     setNewCoinName(response.name);
    //     setNewCoinImageSource(response.image.small);
    //     console.log('new coin name:', response.name)
    //     console.log('coin image source:', response.image.small)
    // }