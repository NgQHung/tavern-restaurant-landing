import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { actionsAction } from "../../store/actions-slice";
import { authActions } from "../../store/Auth-slice";

function Header() {
    const [scrollHeaderCss, setScrollHeaderCss] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
    const email = useSelector((state) => state.authSlice.email);
    const dispatch = useDispatch();

    const changeHeader = () => {
        if (window.scrollY >= 66) {
            setScrollHeaderCss(true);
        } else {
            setScrollHeaderCss(false);
        }
    };

    const signupHandler = () => {
        dispatch(actionsAction.openSignup());
        dispatch(actionsAction.handleCart());
    };
    const loginHandler = () => {
        dispatch(actionsAction.openLogin());
        dispatch(actionsAction.handleCart());
    };
    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    // Link handle
    const linkHandler = (item) => {
        if (item !== activeLink) {
            setActiveLink(item);
        }
    };

    useEffect(() => {
        changeHeader();
        window.addEventListener("scroll", changeHeader);
    });

    const motionCss1 = {
        hidden: {
            y: "-10vh",
        },
        visible: {
            y: 0,
        },
        hover: {
            scale: 1.1,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    return (
        <Fragment>
            <div className={`header ${scrollHeaderCss ? "scroll__header" : ""}`}>
                <div className="nav container">
                    <div className="logo">
                        Tav<span>ern</span>
                    </div>
                    <div className="nav">
                        <ul className="nav__list">
                            <motion.li
                                variants={motionCss1}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                onClick={() => linkHandler("main")}
                            >
                                <Link
                                    smooth
                                    to="#main"
                                    className={activeLink === "main" ? "active-link" : ""}
                                >
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li
                                variants={motionCss1}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                onClick={() => linkHandler("about")}
                            >
                                <Link
                                    smooth
                                    to="#about"
                                    className={activeLink === "about" ? "active-link" : ""}
                                >
                                    About Us
                                </Link>
                            </motion.li>
                            <motion.li
                                variants={motionCss1}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                onClick={() => linkHandler("menu")}
                            >
                                <Link
                                    smooth
                                    to="#menu"
                                    className={activeLink === "menu" ? "active-link" : ""}
                                >
                                    Menu
                                </Link>
                            </motion.li>
                            <motion.li
                                variants={motionCss1}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                onClick={() => linkHandler("testimonial")}
                            >
                                <Link
                                    smooth
                                    to="#testimonial"
                                    className={activeLink === "testimonial" ? "active-link" : ""}
                                >
                                    Review
                                </Link>
                            </motion.li>
                            <motion.li
                                variants={motionCss1}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                onClick={() => linkHandler("cta")}
                            >
                                <Link
                                    smooth
                                    to="#cta"
                                    className={activeLink === "cta" ? "active-link" : ""}
                                >
                                    Contact Us
                                </Link>
                            </motion.li>
                        </ul>
                    </div>
                    <div className="account">
                        <ul className="account__list">
                            {!isLoggedIn && (
                                <button
                                    onClick={loginHandler}
                                    className={`login ${scrollHeaderCss ? "scroll__header" : ""}`}
                                >
                                    Login
                                </button>
                            )}
                            {!isLoggedIn && (
                                <button
                                    onClick={signupHandler}
                                    className={`signup ${scrollHeaderCss ? "scroll__header" : ""}`}
                                >
                                    Sign up
                                </button>
                            )}
                            {isLoggedIn && (
                                <Fragment>
                                    <span>{email}</span>
                                    <button
                                        onClick={logoutHandler}
                                        className={`signup ${
                                            scrollHeaderCss ? "scroll__header" : ""
                                        }`}
                                    >
                                        Log out
                                    </button>
                                </Fragment>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
