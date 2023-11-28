import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header= () => {
    /*is a bool function with default value true+Login
    onClick: false+Logout */
    const [isLoggedin, setIsLoggedin]= useState(true);
    const onlineStatus= useOnlineStatus();

    const {loggedInUser}= useContext(UserContext);
    console.log(loggedInUser);


    //Selector is a hook inside React
    //Here we are subscribing to the store using a selector
    const cartItems= useSelector((store)=> store.cart.items);

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
                        <Link to="/cart" className="link-style">Cart: {cartItems.length} items</Link>
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
                    {/* <li>{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;