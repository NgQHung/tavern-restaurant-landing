import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import './Testimonial.css';

function Testimonial() {
    return (
        <Fragment>
            <div className="section">
                <div className="testimonial" id="testimonial">
                    {/* {TESTIMONIAL__DATA.map((data) => ( */}
                    <div className="testimonial__container grid">
                        <div className="testimonial__image">
                            <img
                                src="https://tavern-restaurant-landing-page.vercel.app/imgs/pic-man-testimonial.png"
                                alt="this is a pic"
                            />
                        </div>
                        <div className="testimonial__layout">
                            <div className="testimonial__data ">
                                {/* <div className="testimonial__author">{data.author}</div>
                                    <div className="testimonial__position">{data.position}</div> */}
                                <div className="testimonial__star">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="testimonial__text">
                                    “They are the best people. And this is the suitable platform to{' '}
                                    <br /> ordering food online. I have enjoyed a lotto order with
                                    them. They <br /> are very helpful and fasterpeople.”
                                </div>
                            </div>
                            <div className="testimonial__swiper">
                                <motion.div
                                    // initial={{ x: "100vw", opacity: 0 }}
                                    // animate={{ x: 0, opacity: 1 }}
                                    // transition={{ delay: 1, type: "spring" }}
                                    className="icons grid">
                                    <div className="arrow__left">
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </div>
                                    <div className="arrow__right">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </Fragment>
    );
}

export default Testimonial;
