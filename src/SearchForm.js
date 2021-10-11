import useStyles from './styles.js';
import React, { useState } from 'react';
import { Typography, CssBaseline, Container, Card, CardMedia, CardContent, CardActions, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import Paper from "@material-ui/core/Paper";
import { useHistory } from 'react-router-dom'

// import axios from 'axios';





function SearchForm({ coins }) {

    const classes = useStyles();
    const history = useHistory();

    const [newSearch, setNewSearch] = useState('');
    const [newCoinName, setNewCoinName] = useState('');
    const [newCoinImageSource, setNewCoinImageSource] = useState('');
    const [search, setSearch] = useState('');
    const [searchArray, setSearchArray] = useState([]);

    let coinToRender = '';


    const handleChange = (event) => {
        event.preventDefault();
        console.log('new search is:', newSearch)
        for (let i = 0; i < coins.length; i++) {
            if (
                coins[i].id == newSearch ||
                coins[i].symbol == newSearch ||
                coins[i].name == newSearch ||
                coins[i].image == newSearch) {
                searchArray.unshift(coins[i])
            } else {
                console.log('no results')
            }

        }
        console.log(searchArray)
        setNewSearch('');
    }

    const getDetails = (id, name, image, symbol, price, marketCap, priceChange) => {
        console.log('coin id:', id)
        history.push(`/coin-details/`)
    }


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
                            value={newSearch}
                            className="coinInput"
                            label="Search For A Coin"
                            onChange={(event) => setNewSearch(event.target.value)}
                        />
                        <Button variant="contained" size="small" type="submit" style={{ marginLeft: '50px' }}>Go</Button>

                    </form>






                    {searchArray.map((card) => (
                        <Grid style={{paddingTop: '40px', width: '80%', marginLeft: 'auto', marginRight: 'auto'}} item key={card}>
                            <Card onClick={() => getDetails(card.id)} style={{ cursor: 'pointer'}} className={classes.card}  >
                                <CardMedia
                                    className={classes.cardMedia}
                                    component="img"
                                    height="140"
                                    image={card.image}
                                    title="Image Title"
                                    alt="Image Broken"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Grid>
                                        <Grid item className={classes.floatLeft} xs={12} s={10} md={10} lg={10} xl={10}>
                                            <Typography variant="h6">
                                                {card.name} || {card.symbol.toUpperCase()} || ${card.current_price.toFixed(2)}
                                            </Typography>
                                        </Grid>
                                        <Grid item className={classes.floatRight} xs={12} s={2} md={2} lg={2} xl={2}>
                                            <CardActions>
                                                <Button variant="outlined" size="small" color="primary">Details</Button>
                                            </CardActions>
                                        </Grid>
                                    </Grid>
                                </CardContent>

                            </Card>
                        </Grid>
                    ))}
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

    // <h1 >{coin.symbol}</h1>
    // <img onClick={() => getDetails(coin.id)} width="50px" src={coin.image} />