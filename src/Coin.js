import React from 'react';
import { useHistory, HashRouter as Router, Route } from 'react-router-dom';
import './Coin.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyles from './styles.js';



                //use reduxStore ins
function Coin({ id, name, image, symbol, price, marketCap, priceChange }) {

    const history = useHistory();

    const classes = useStyles();

    const getDetails = () => { 
        history.push('/coin-details')
    }

    
    return (
                                                       
                    <TableRow className={classes.tableRow} onClick={() => getDetails()} key={id}>
                        <TableCell><img className={classes.coinIcon} src={image} alt="icon" /></TableCell>
                        <TableCell><h4>{name}</h4></TableCell>
                        <TableCell><p className="coinSymbol">{symbol.toUpperCase()}</p></TableCell>
                        <TableCell> <p className="coinPrice">${price}</p></TableCell>
                        <TableCell> <p className="coinMarketCap">${marketCap}</p></TableCell>
                        <TableCell> {priceChange < 0 ? (<p className="downRed"><KeyboardArrowDownIcon />{priceChange.toFixed(2)}%</p>) : (<p className="upGreen"> <KeyboardArrowUpIcon /> {priceChange.toFixed(2)}%</p>)}</TableCell>
                    </TableRow>
               
    )
}

export default Coin;