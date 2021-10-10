import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/fa'

function Coin({ name, image, symbol, price, marketCap, priceChange }) {
    return (
        <div className="coinContainer">
            <div className="coinRow">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coinSymbol">{symbol}</p>
                </div>
                <div className="coinData">
                    <p className="coinPrice">${price}</p>
                    <p className="coinMarketCap">${marketCap}</p>
                    {priceChange < 0 ? (<p className="downRed"><BsFillArrowUpCircleFill />{priceChange.toFixed(2)}%</p>) : (<p className="upGreen">{priceChange.toFixed(2)}%</p>)}
                </div>
            </div>
        </div>
    )
}

export default Coin;