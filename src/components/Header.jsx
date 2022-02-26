import React from 'react';
import '_styles/Header.scss'

import menu from '_icons/icon_menu.svg';
import logo from '_logos/logo_yard_sale.svg'
import shoppingCart from '_icons/icon_shopping_cart.svg';

const Header = () => {
    return (
        <nav>
            <img src={menu} alt="menu" className="nav-menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCart} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;