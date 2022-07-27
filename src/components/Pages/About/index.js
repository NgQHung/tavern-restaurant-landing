import React, { Fragment } from "react";
import "./About.css";

function About() {
    return (
        <Fragment>
            <div className="about section">
                <div className="about__container  container">
                    <div className="about__title">
                        <h2 className="title">How its work</h2>
                        <div className="text">
                            <p>
                                Driving improved quality and productivity. Reducing your costs.
                                Maximizing the value of your.
                            </p>
                        </div>
                    </div>
                    <div className="about__list">
                        <div className="about__card">
                            <div className="about__icon">logo</div>
                            <div className="about__category">Order Your Food</div>
                            <div className="about__description">
                                Order your food easily and we will receive your order as soon and
                                will deliver it faster.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default About;
