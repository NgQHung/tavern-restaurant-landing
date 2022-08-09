import React, { Fragment, useEffect, useRef, useState } from "react";
import MenuCard from "../../UI/MenuCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { swipeSliceActions } from "../../store/swipeSlide-slice";
import { motion } from "framer-motion";
import { MENU__DATA } from "../../data/Data";

function Menu() {
    const dispatch = useDispatch();

    const [width, setWidth] = useState(0);

    const swipe = useRef();
    // const

    const swipeHandler = (e) => {
        e.preventDefault();
        dispatch(swipeSliceActions.swipe(1));
        swipe.current.scrollLeft += 260;
    };
    useEffect(() => {
        setWidth(swipe.current.scrollWidth - swipe.current.offsetWidth);
    }, []);

    return (
        <Fragment>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="menu section"
                id="menu"
            >
                <div className="menu__container container grid">
                    <motion.div
                        initial={{ y: "-10vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, type: "tween" }}
                        className="menu__arrow"
                    >
                        <div className="menu__title">
                            <h2>Order Best Menu</h2>
                            <p className="menu__text" style={{ color: "#555B5A" }}>
                                Check out our best menu and order the best delicious
                                <br /> food that suit to you.
                            </p>
                        </div>
                        <div className="swiper__container">
                            <motion.div
                                // initial={{ x: "100vw", opacity: 0 }}
                                // animate={{ x: 0, opacity: 1 }}
                                // transition={{ delay: 1, type: "spring" }}
                                className="icons grid"
                            >
                                <div className="arrow__left">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </div>
                                <div onClick={swipeHandler} className="arrow__right">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className="menu__list">
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            ref={swipe}
                            className="menu__list__container"
                        >
                            {MENU__DATA.map((item, index) => {
                                return (
                                    <motion.div
                                        initial={{ y: "10vh", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, type: "tween" }}
                                        key={item.id}
                                    >
                                        <MenuCard
                                            image={item.image}
                                            title={item.title}
                                            time={item.time}
                                            type={item.type}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </Fragment>
    );
}

export default Menu;
