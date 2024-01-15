import React from 'react'
import "./navbar.css"
import shoppingLogo from "../Assets/shopping logo.svg"
import cart from "../Assets/cart_icon.png";
import { useState } from 'react';

const Navbar = () => {

    const [page, setPage] = useState('Shop')

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={shoppingLogo} alt='cart-logo' />
                <p>Shopping</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setPage('Shop') }}>Shop {page === "Shop" ? <hr /> : ""}</li>
                <li onClick={() => { setPage('Men') }}>Men {page === "Men" ? <hr /> : ""}</li>
                <li onClick={() => { setPage('Women') }}>Women {page === "Women" ? <hr /> : ""}</li>
                <li onClick={() => { setPage('Kid') }}>Kids {page === "Kid" ? <hr /> : ""}</li>
            </ul>
            <div className="nav-login-cart">
                <button>login</button>
                <img src={cart} alt='cart' />
                <div className='count'>0</div>
            </div>
        </div>
    )
}

export default Navbar
