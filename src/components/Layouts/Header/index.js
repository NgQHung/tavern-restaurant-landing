import React, { Fragment, useEffect, useState } from "react";
import "./Header.css";

function Header() {
    const [scrollHeaderCss, setScrollHeaderCss] = useState(false);

    const changeHeader = () => {
        if (window.scrollY >= 66) {
            setScrollHeaderCss(true);
        } else {
            setScrollHeaderCss(false);
        }
    };
    useEffect(() => {
        changeHeader();
        window.addEventListener("scroll", changeHeader);
    });
    return (
        <Fragment>
            <div className={`header ${scrollHeaderCss ? "scroll__header" : ""}`}>
                <div className="nav container">
                    <div className="logo">
                        Tav<span>ern</span>
                    </div>
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
