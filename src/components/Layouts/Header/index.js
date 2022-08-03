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
                    <div className="nav">
                        <ul className="nav__list">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Menu</li>
                            <li>Review</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="account">
                        <ul className="account__list">
                            <button className={`login ${scrollHeaderCss ? "scroll__header" : ""}`}>
                                <li>Login</li>
                            </button>
                            <button className={`signup ${scrollHeaderCss ? "scroll__header" : ""}`}>
                                <li>Sign up</li>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
