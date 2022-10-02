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



            </nav>

        </>

    )
}
