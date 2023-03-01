import React from "react";

import logo from "./img/blue-current-logo-blue-v-2.svg";
import powered from "./img/powered-by.svg";
import "./Header.scss";


const Header = () => {
    return(
        <header className="header">
            <div className="container header__logo">
                <img src={powered} alt="powered-by-logo"/>
                <img src={logo} alt="logo"/>
            </div>
        </header>
    )
}

export default Header