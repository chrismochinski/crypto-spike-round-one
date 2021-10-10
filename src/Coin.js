import React from 'react';
import './Coin.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from '@mui/material/TableContainer';
import Paper from "@material-ui/core/Paper";
import useStyles from './styles.js';




function Coin({ id, name, image, symbol, price, marketCap, priceChange }) {

    const classes = useStyles();

    console.log("id is:", id)
    return (
       
                    <tr key={id}>
                        <td><img className={classes.coinIcon} src={image} alt="crypto" /></td>
                        <td><h4>{name}</h4></td>
                        <td><p className="coinSymbol">{symbol}</p></td>
                        <td> <p className="coinPrice">${price}</p></td>
                        <td> <p className="coinMarketCap">${marketCap}</p></td>
                        <td>  {priceChange < 0 ? (<p className="downRed"><KeyboardArrowDownIcon />{priceChange.toFixed(2)}%</p>) : (<p className="upGreen"> <KeyboardArrowUpIcon /> {priceChange.toFixed(2)}%</p>)}</td>
                    </tr>
               
    )
}

export default Coin;