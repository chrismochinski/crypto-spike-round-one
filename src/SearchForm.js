import useStyles from './styles.js';
import React, { useState, useEffect } from 'react';
import { Typography, CssBaseline, Container } from '@material-ui/core';


function SearchForm() {

    const classes = useStyles();

    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (

        <div>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.main}>
                <Typography variant="h5">Crypto Search</Typography>
                <form>
                    <input type="text" placeholder="EG: FartCoin" className="coinInput" onChange={handleChange} />
                </form>
            </Container>
        </div>
    )
}

export default SearchForm;