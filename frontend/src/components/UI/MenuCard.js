import React, { Fragment } from "react";
import "./MenuCard.css";

function MenuCard(props) {
    return (
        <Fragment>
            <div className="menu__card">
                <div className="menu__image">
                    <img src={props.image} alt="this is a pic" />
                </div>
                <div className="menu__data">
                    <h3 className="menu__title">{props.title}</h3>
                    <p className="menu__price">{props.price}</p>
                    <div className="menu__layout">
                        <div className="menu__time">
                            <p>Time:</p>
                            <p className="menu__time-minute">{props.time}</p>
                        </div>
                        <div className="menu__type">
                            <p>Type Food: </p>
                            <p className="menu__type-session">{props.type}</p>
                        </div>
                    </div>
                </div>
                <div className="swiper__pagination"></div>
            </div>
        </Fragment>
    );
}

export default MenuCard;
