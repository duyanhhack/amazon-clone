import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <ul>
                    <li>
                        <Link to="/">
                            Amazone.com
                        </Link>
                    </li>
                    <li>
                        <Link to="/checkout">
                            Your Lists
                        </Link>
                    </li>
                    <li>
                        Find a Gift
                    </li>
                    <li>
                        Browsing History
                    </li>
                    <li>
                        Returns
                    </li>
                    <li>
                        Customer Service
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/checkout">
                            Your Order
                        </Link>
                    </li>
                    <li>
                        Gift Cards & Registry
                    </li>
                    <li>
                        Your Account
                    </li>
                    <li>
                        Sell products on Amazon
                    </li>
                </ul>
            </div>
            <div className="footer__logo">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="LOGO" />
            </div>
        </div>
    )
}

export default Footer