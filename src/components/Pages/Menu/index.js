import React, { Fragment } from "react";
import MenuCard from "../../UI/MenuCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

function Menu() {
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
                        <div className="swiper__container">
                            <div className="icons grid">
                                <div className="arrow__left">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </div>
                                <div className="arrow__right">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu__list">
                        <div className="menu__list__container">
                            <MenuCard />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Menu;
