import React, { Fragment } from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
    return (
        <Fragment>
            <div className="about section" id="about">
                <motion.div
                    initial={{ y: "-10vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "tween" }}
                    className="about__container grid container"
                >
                    <div className="about__title">
                        <h2 className="title">How its work</h2>
                        <div className="text">
                            Driving improved quality and productivity. Reducing your costs.
                            Maximizing the value of your.
                        </div>
                    </div>
                    <div className="about__list">
                        <motion.div
                            initial={{ y: "10vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, type: "tween" }}
                            className="about__card"
                        >
                            <div className="about__icon"></div>
                            <div className="about__category">Order Your Food</div>
                            <div className="about__description">
                                Order your food easily and we will receive your order as soon and
                                will deliver it faster.
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "10vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, type: "tween" }}
                            className="about__card"
                        >
                            <div className="about__icon"></div>
                            <div className="about__category">Order Your Food</div>
                            <div className="about__description">
                                Order your food easily and we will receive your order as soon and
                                will deliver it faster.
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "10vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, type: "tween" }}
                            className="about__card"
                        >
                            <div className="about__icon"></div>
                            <div className="about__category">Order Your Food</div>
                            <div className="about__description">
                                Order your food easily and we will receive your order as soon and
                                will deliver it faster.
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Fragment>
    );
}

export default About;
