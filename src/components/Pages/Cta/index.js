import React, { Fragment } from "react";
import "./Cta.css";
function Cta() {
    return (
        <Fragment>
            <div className="cta section">
                <div className="cta__container container grid">
                    <div className="cta__data">
                        <p className="cta__download">Download Our App</p>
                        <h3 className="cta__subtitle">
                            Order Your Favourite Food
                            <br /> through Our App
                        </h3>
                        <p className="cta__subtext">
                            Our app gives you access to your favourite
                            <br /> restaurants.
                            <br />
                            Get your food delivered right to you.
                        </p>
                        <div className="cta__button">
                            <button className="btn__apple"></button>
                            <button className="btn__android"></button>
                        </div>
                    </div>
                    <div className="cta__image">
                        <img
                            src="https://tavern-restaurant-landing-page.vercel.app/imgs/phone.png"
                            alt="this is a pic"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Cta;
