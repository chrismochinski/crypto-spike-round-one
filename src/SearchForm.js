import useStyles from './styles.js';
import React, { useState } from 'react';
import { Typography, CssBaseline, Container, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import Paper from "@material-ui/core/Paper";





function SearchForm() {

    const classes = useStyles();

    const [newSearch, setNewSearch] = useState('');
    const [newCoinName, setNewCoinName] = useState('');
    const [newCoinImageSource, setNewCoinImageSource] = useState('');
    const [search, setSearch] = useState('');

    const handleChange = lasagna => {
        setSearch(lasagna.target.value);
        console.log(search);

    }


    return (

        <div>
            <CssBaseline />
            <Paper elevation={12} className={classes.searchPaper}>
                <Container maxWidth="sm" className={classes.main}>
                    <Typography variant="h5">Crypto Search</Typography>
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
                        <Button variant="contained" size="small" type="submit">Go</Button>

                    </form>
                </Container>
            </Paper>
            {/* {search} */}
            <h1>{newCoinName}</h1>
            {/* {JSON.stringify(newCoinImageSource)} */}
            <img src={newCoinImageSource} />
        </div>
    )
}

export default SearchForm;


    // const submitSearch = (event) => {
    //     event.preventDefault();
    //     console.log('newSearch is:', newSearch);
    //     axios.get(`https://api.coingecko.com/api/v3/coins/${newSearch}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`)
    //     .then(res => {
    //         setSearchResults(res.data);
    //         console.log(res.data);
    //         finalizeSearch(res.data);
    //     }).catch(error => console.log('error getting cryptos:', error))
    // }

    // const finalizeSearch = (response) => {
    //     console.log('the response was:', response)
    //     setNewCoinName(response.name);
    //     setNewCoinImageSource(response.image.small);
    //     console.log('new coin name:', response.name)
    //     console.log('coin image source:', response.image.small)
    // }