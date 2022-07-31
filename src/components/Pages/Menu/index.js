import React, { Fragment, useEffect, useRef, useState } from "react";
import MenuCard from "../../UI/MenuCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { swipeSliceActions } from "../../store/swipeSlide-slice";
import { motion } from "framer-motion";
const MENU__DATA = [
    {
        id: uuidv4(),
        title: "Chicken Vegan Bowl",
        price: "$ 18,00",
        time: "20 min",
        type: "Dinner/lunch",
        image: "https://tavern-restaurant-landing-page.vercel.app/imgs/menu.png",
    },
    {
        id: uuidv4(),
        title: "Vegetable Route",
        price: "$ 18,00",
        time: "20 min",
        type: "Dinner/lunch",
        image: "https://tavern-restaurant-landing-page.vercel.app/imgs/menu3.png",
    },
    {
        id: uuidv4(),
        title: "Eggs Benedict Burger",
        price: "$ 18,00",
        time: "20 min",
        type: "Dinner/lunch",
        image: "https://tavern-restaurant-landing-page.vercel.app/imgs/menu2.png",
    },
    {
        id: uuidv4(),
        title: "Yummy Pizza",
        price: "$ 18,00",
        time: "20 min",
        type: "Dinner/lunch",
        image: "https://tavern-restaurant-landing-page.vercel.app/imgs/menu4.png",
    },
    {
        id: uuidv4(),
        title: "Chicken Vegan Bowl",
        price: "$ 18,00",
        time: "20 min",
        type: "Dinner/lunch",
        image: "https://tavern-restaurant-landing-page.vercel.app/imgs/menu3.png",
    },
    {
        id: uuidv4(),
        title: "Eggs Benedict Burger",
        price: "$ 18,00",
        time: "20 min",
        type: "Dinner/lunch",
        image: "https://tavern-restaurant-landing-page.vercel.app/imgs/menu2.png",
    },
    {
        id: uuidv4(),
        title: "Yummy Pizza",
        price: "$ 18,00",
        time: "20 min",
        type: "Dinner/lunch",
        image: "https://tavern-restaurant-landing-page.vercel.app/imgs/menu4.png",
    },
];

function Menu() {
    const current = useSelector((state) => state.swipeSlide.current);
    const indexSwiped = useSelector((state) => state.swipeSlide.indexSwiped);
    const swipeClicked = useSelector((state) => state.swipeSlide.swipeClicked);
    const defaultIndex = 4;
    const dispatch = useDispatch();

    const [width, setWidth] = useState(0);

    const swipe = useRef();

    useEffect(() => {
        console.log(swipe.current.scrollWidth);
        setWidth(swipe.current.scrollWidth - swipe.current.offsetWidth);
    }, []);

    const swipeHandler = (e) => {
        e.preventDefault();
        dispatch(swipeSliceActions.swipe(defaultIndex));
        console.log(current);
        console.log(indexSwiped);
    };

    return (
        <Fragment>
            <div className="menu section">
                <div className="menu__container container grid">
                    <div className="menu__arrow">
                        <div className="menu__title">
                            <h2>Order Best Menu</h2>
                            <p className="menu__text" style={{ color: "#555B5A" }}>
                                Check out our best menu and order the best delicious
                                <br /> food that suit to you.
                            </p>
                        </div>
                        <div className="swiper__container container">
                            <div className="icons grid">
                                <div className="arrow__left">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </div>
                                <div onClick={swipeHandler} className="arrow__right">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div className="menu__list">
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            ref={swipe}
                            className="menu__list__container"
                        >
                            {MENU__DATA.map((item, index) => {
                                return (
                                    <motion.div>
                                        <MenuCard
                                            key={item.id}
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
            </div>
        </Fragment>
    );
}

export default Menu;
