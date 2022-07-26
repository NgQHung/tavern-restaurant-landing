import React, { Fragment } from "react";
import "./Main.css";
function Main() {
    return (
        <Fragment>
            <div className="main">
                <div className="main__img">
                    <img
                        className="homeImg"
                        src="https://tavern-restaurant-landing-page.vercel.app/imgs/Base.png"
                        alt="this is the main pic"
                        // style="width: 100%"
                    />
                </div>
                <div className="home section container grid">
                    <div className="home__data">
                        <div className="home__heading">
                            <h2>Giving your Hunger a new Option.</h2>
                        </div>
                        <div className="home__subtext">
                            <p>
                                Want a delicious meal, but no time we will deliver it hot and yummy
                                to your doorstep.
                            </p>
                        </div>
                        <div className="home__button">
                            <button className="order">Order Food</button>
                            <button className="learn__more">Learn More</button>
                        </div>
                    </div>
                    <div className="home__img"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Main;
