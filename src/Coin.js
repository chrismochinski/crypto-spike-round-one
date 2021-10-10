import React from 'react';
import './Coin.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { tableCellClasses } from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from '@mui/material/TableContainer';
import Paper from "@material-ui/core/Paper";
import useStyles from './styles.js';




function Coin({ id, name, image, symbol, price, marketCap, priceChange }) {

    const classes = useStyles();

    console.log("id is:", id)
    return (
                
                    <TableRow key={id}>
                        <TableCell><img className={classes.coinIcon} src={image} alt="icon" /></TableCell>
                        <TableCell><h4>{name}</h4></TableCell>
                        <TableCell><p className="coinSymbol">{symbol}</p></TableCell>
                        <TableCell> <p className="coinPrice">${price}</p></TableCell>
                        <TableCell> <p className="coinMarketCap">${marketCap}</p></TableCell>
                        <TableCell>  {priceChange < 0 ? (<p className="downRed"><KeyboardArrowDownIcon />{priceChange.toFixed(2)}%</p>) : (<p className="upGreen"> <KeyboardArrowUpIcon /> {priceChange.toFixed(2)}%</p>)}</TableCell>
                    </TableRow>
               
    )
}

export default Coin;