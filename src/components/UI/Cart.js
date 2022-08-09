import React, { Fragment } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux/es/exports";
import { actionsAction } from "../store/actions-slice";
import "./Cart.css";

function Cart({ cartContent, isSignupOpen, isLoginOpen }) {
    const dispatch = useDispatch();
    const { title, firstName, lastName, email, password } = cartContent;
    const cancelHandler = () => {
        dispatch(actionsAction.closeSignup());
        dispatch(actionsAction.closeLogin());
    };

    const signupContent = (
        <Fragment>
            <h3 className="title__modal">{title}</h3>

            <div className="input__section">
                <div className="input__place">
                    <label>{firstName}</label>
                </div>
                <input type="text" />
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>{lastName}</label>
                </div>
                <input type="text" />
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>{email}</label>
                </div>
                <input type="text" />
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>{password}</label>
                </div>
                <input type="text" />
            </div>
        </Fragment>
    );
    const loginContent = (
        <Fragment>
            <h3 className="title__modal">{title}</h3>
            <div className="input__section">
                <div className="input__place">
                    <label>{email}</label>
                </div>
                <input type="text" />
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>{password}</label>
                </div>
                <input type="text" />
            </div>
        </Fragment>
    );

    return (
        <Modal>
            <div className="content__place">
                {isLoginOpen && loginContent}
                {isSignupOpen && signupContent}
            </div>
            <div className="input__button">
                <button className="submit">Submit</button>
                <button onClick={cancelHandler} className="cancel">
                    Cancel
                </button>
            </div>
        </Modal>
    );
}

export default Cart;
