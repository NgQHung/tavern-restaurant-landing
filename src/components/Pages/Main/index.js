import React, { Fragment } from "react";
import "./Main.css";
function Main() {
    return (
        <Fragment>
            <div className="main">
                <img
                    className="homeImg"
                    src="https://tavern-restaurant-landing-page.vercel.app/imgs/Base.png"
                    alt="this is the main pic"
                    // style="width: 100%"
                />
                <div className="home section container grid">
                    <div className="home__data">
                        <div className="home__heading">
                            <h2>
                                Giving your <br />
                                Hunger a new
                                <br />
                                Option.
                            </h2>
                        </div>
                        <div className="home__subtext">
                            <p>
                                Want a delicious meal, but no time we will deliver it
                                <br /> hot and yummy to your doorstep.
                            </p>
                        </div>
                        <div className="home__button">
                            <button className="order">Order Food</button>
                            <div className="home__learn">
                                <button className="learn__more">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="home__img home__grid">
                        <div className="home__mainImg">
                            <img
                                src="https://tavern-restaurant-landing-page.vercel.app/imgs/home.png"
                                alt="pic"
                            />
                        </div>
                        <div className="home__subImg">
                            <img
                                src="https://tavern-restaurant-landing-page.vercel.app/imgs/home2.png"
                                alt="pic"
                            />
                            <img
                                src="https://tavern-restaurant-landing-page.vercel.app/imgs/home3.png"
                                alt="pic"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Main;
