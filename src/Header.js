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
                <Typography className={classes.title} variant="h4">Mo's CoinGecko API Spike</Typography>
                <Typography
                    className={classes.subtitle}
                    variant="h6">
                    Testing the CoinGecko API as well as implementing some of the Material UI stuff from my first spike
                </Typography>
            </AppBar>
        </div>
    )
}

export default Header;