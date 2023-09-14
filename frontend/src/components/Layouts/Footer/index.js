import React, {Fragment} from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faLocationPin} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <Fragment>
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__line container grid">
                        <div className="footer__tavern">
                            <a className="footer__logo">
                                Tav<span>ern</span>
                            </a>
                            <p className="footer__text">
                                Food order now super easy for everyone.
                                <br />
                                Let's order your food through our website and
                                <br /> enjoy your ordering.
                            </p>
                            <div className="footer__media">
                                <div className="footer_facebook"></div>
                            </div>
                        </div>
                        <div></div>
                        <div className="footer__company">
                            <div className="footer__title">Company</div>
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Contact Us</a>
                        </div>
                        <div className="footer__features">
                            <div className="footer__title">Features</div>
                            <a href="#">Blog</a>
                            <a href="#">Support</a>
                            <a href="#">Privacy</a>
                            <a href="#">Security</a>
                        </div>
                        <div className="footer__support">
                            <div className="footer__title">Support</div>
                            <div className="footer__data">
                                <div className="footer__icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <p>+880 1706 499 216</p>
                            </div>
                            <div className="footer__data">
                                <div className="footer__icon">
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </div>
                                <p>email@gmail.com</p>
                            </div>
                            <div className="footer__data">
                                <div className="footer__icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <p>4/5 Seddon Park, Hamilton New Zealand.</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__service">
                        <p>© Copyright 2022 webdesign.gdn All Rights Reserved</p>
                        <p>Made By: </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Footer;
