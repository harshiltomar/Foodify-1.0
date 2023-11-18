import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () => {
    /*is a bool function with default value true+Login
    onClick: false+Logout */
    const [isLoggedin, setIsLoggedin]= useState(true);
    const onlineStatus= useOnlineStatus();

    return (
        <div className="header">
            <Link to="/">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}></img>
                </div>
            </Link>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/" className="link-style">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link-style">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link-style">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="link-style">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="link-style">Cart</Link>
                    </li>
                    <li>
                        {isLoggedin ? ( 
                        <button
                            className="logout-btn"
                            onClick={() => setIsLoggedin(false)}
                        >
                            Logout
                        </button>
                        ) : (
                        <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                            Login
                        </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;