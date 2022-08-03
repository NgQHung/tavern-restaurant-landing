import React, { Fragment, useEffect, useState } from "react";
import { Router, Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

function Header() {
    const [scrollHeaderCss, setScrollHeaderCss] = useState(false);
    const param = useParams();
    console.log(param);
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
                            <motion.li initial={{ y: "-10vh" }} animate={{ y: 0 }}>
                                <a href={"#home"}>Home</a>
                            </motion.li>
                            <motion.li initial={{ y: "-10vh" }} animate={{ y: 0 }}>
                                <a href={"#about"}>About Us</a>
                            </motion.li>
                            <motion.li initial={{ y: "-10vh" }} animate={{ y: 0 }}>
                                <a href={"#menu"}>Menu</a>
                            </motion.li>
                            <motion.li initial={{ y: "-10vh" }} animate={{ y: 0 }}>
                                <a href={"#testimonial"}>Review</a>
                            </motion.li>
                            <motion.li initial={{ y: "-10vh" }} animate={{ y: 0 }}>
                                <a href={"#cta"}>Contact Us</a>
                            </motion.li>
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
