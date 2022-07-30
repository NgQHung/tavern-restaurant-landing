import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Testimonial.css";

function Testimonial() {
    return (
        <Fragment>
            <div className="section">
                <div className="testimonial">
                    <div className="testimonial__container container grid">
                        <div className="testimonial__image">
                            <img
                                src="https://tavern-restaurant-landing-page.vercel.app/imgs/pic-man-testimonial.png"
                                alt="this is a pic"
                            />
                        </div>
                        <div className="testimonial__layout">
                            <div className="testimonial__data ">
                                <div className="testimonial__author">Kyle Mills</div>
                                <div className="testimonial__position">UX/UI Designer</div>
                                <div className="testimonial__star">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="testimonial__text">
                                    “They are the best people. And this is the suitable platform to{" "}
                                    <br /> ordering food online. I have enjoyed a lotto order with
                                    them. They <br /> are very helpful and fasterpeople.”
                                </div>
                            </div>
                            <div className="testimonial__swiper">
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
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Testimonial;
