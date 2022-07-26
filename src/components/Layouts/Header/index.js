import React, { Fragment } from "react";
import "./Header.css";

function Header() {
    return (
        <Fragment>
            <div className="header">
                <div className="nav container">
                    <div className="logo">LOGO</div>
                    <div className="menu">
                        <ul className="menu__list">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Menu</li>
                            <li>Review</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="account">
                        <ul className="account__list">
                            <li>Login</li>
                            <li>Sign up</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
