import './App.css';
import { Info, Home } from '@material-ui/icons';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Typography, AppBar, CssBaseline, Container, Toolbar } from '@material-ui/core';
import useStyles from './styles.js';



function Header() {

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <CssBaseline />

            <AppBar position="relative">
                <Toolbar className={classes.topLinks}>
                    <Container className={classes.iconLinks}>
                        <a href="https://localhost:3000" target="_blank"><Home /></a>
                        <a href="https://www.coingecko.com/" target="_blank"><MonetizationOnIcon /></a>
                        <a href="https://github.com/chrismochinski/material-ui-crash-course" target="_blank"><Info /></a>
                    </Container>
                    <Container className={classes.iconWords}>
                        <a className={classes.about}>About</a>
                    </Container>
                </Toolbar>
                <Typography className={classes.title} variant="h5"><b>Mo's CoinGecko API Spike</b></Typography>
                <Typography
                    className={classes.subtitle}
                    variant="h5">
                    Don't Get Carried Away Now! 
                </Typography>
            </AppBar>
        </div>
    )
}

export default Header;