import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Coins = () => {
    const [SerchWord, setSerchWord] = useState('')
    const [ListOfCoins, setListOfCoins] = useState([]);

    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
            (response) => {
                setListOfCoins(response.data.coins);
            });
    });

    const filterdcoins = ListOfCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(SerchWord.toLowerCase())
    })

    return (
        <div >
            <div className="App">

                <div className="d-flex flex-wrap container display-coin" >
                    {/* cryptoDisplay  */}
                    {filterdcoins.map((coin) => {
                        return <div className="coin" key={coin.id}>
                            < img src={coin.icon} alt="not available" />
                            <h3>Symbol: {coin.symbol}</h3>
                            <p>Price: ${coin.price}</p>
                            <h2> Name: {coin.name}</h2>
                        </div>

                    })}
                </div>

            </div>
        </div >
    )
}

export default Coins
