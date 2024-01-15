import React from 'react'
import "./navbar.css"
import shoppingLogo from "../Assets/shopping logo.svg"
import cart from "../Assets/cart_icon.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [page, setPage] = useState('Shop')

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={shoppingLogo} alt='cart-logo' />
                <p>Shopping</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setPage('Shop') }}><Link style={{ textDecoration: "none" }} to="/">Shop </Link> {page === "Shop" ? <hr /> : ""}</li>
                <li onClick={() => { setPage('Men') }}> <Link style={{ textDecoration: "none" }} to="/mens">Men</Link> {page === "Men" ? <hr /> : ""}</li>
                <li onClick={() => { setPage('Women') }}><Link style={{ textDecoration: "none" }} to="womens">Women</Link> {page === "Women" ? <hr /> : ""}</li>
                <li onClick={() => { setPage('Kid') }}><Link style={{ textDecoration: "none" }} to="kids">Kids</Link> {page === "Kid" ? <hr /> : ""}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>login</button></Link>
                <Link to="/cart"><img src={cart} alt='cart' /></Link>
                <div className='count'>0</div>
            </div>
        </div>
    )
}

export default Navbar
