import React from 'react'
import navigation from './navigation.css';
import { useState } from "react";
import { Search } from './Search';


export const Navigationbar = () => {

    const [showMediaIcon, setshowMediaIcon] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* log section  */}
                <div className="logo">
                    <div className="logo-img"><img src="./brand.png" alt="" /></div>
                    <h3>Project_<span>K</span>rypto</h3>
                </div>

                {/* routes section */}
                <div className={`${showMediaIcon ? "mobile-ul" : "ul-section"} `}>
                    <ul>
                        <li>Cryptocurrencies</li>
                        <li >NFT</li>
                        <li >About</li>
                    </ul>
                </div>

                {/* links section */}
                <div className="hero-section">
                    <ul>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
                <div className="hamburger">
                    <a href="#" onClick={() => { setshowMediaIcon(!showMediaIcon); }}> <i className="fa-solid fa-burger"></i></a>
                </div>
            </nav>

        </>

    )
}
