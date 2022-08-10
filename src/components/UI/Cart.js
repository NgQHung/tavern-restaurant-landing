import React, { Fragment } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux/es/exports";
import { actionsAction } from "../store/actions-slice";
import "./Cart.css";
import useInput from "../hooks/use-input";

function Cart({ cartContent, isSignupOpen, isLoginOpen }) {
    const {
        input: firstNameInput,
        isValid: firstNameIsValid,
        isInvalid: firstNameHasError,
        inputOnBlur: firstNameOnBlur,
        inputOnChange: firstNameOnChange,
    } = useInput((input) => input.trim() !== "");
    const dispatch = useDispatch();
    const { title, firstName, lastName, email, password } = cartContent;
    const {
        input: lastNameInput,
        isValid: lastNameIsValid,
        isInvalid: lastNameHasError,
        inputOnBlur: lastNameOnBlur,
        inputOnChange: lastNameOnChange,
    } = useInput((input) => input.trim() !== "");
    const {
        input: emailInput,
        isValid: emailIsValid,
        isInvalid: emailHasError,

        inputOnBlur: emailOnBlur,
        inputOnChange: emailOnChange,
    } = useInput((input) => input.includes("@"));
    const {
        input: passwordInput,
        isValid: passwordIsValid,
        isInvalid: passwordHasError,

        inputOnBlur: passwordOnBlur,
        inputOnChange: passwordOnChange,
    } = useInput((input) => input.length > 5);

    const cancelHandler = () => {
        dispatch(actionsAction.closeSignup());
        dispatch(actionsAction.closeLogin());
    };
    // console.log("firstNameInput", firstNameInput);
    // console.log("firstNameIsValid: ", firstNameIsValid);
    // console.log("firstNameIsValid: ", firstNameIsInValid);

    const signupContent = (
        <Fragment>
            <h3 className="title__modal">{title}</h3>

            <div className="input__section">
                <div className="input__place">
                    <label>{firstName}</label>
                </div>
                <input
                    className={`input ${firstNameHasError ? "invalid" : ""}`}
                    onBlur={firstNameOnBlur}
                    onChange={firstNameOnChange}
                    type="text"
                    value={firstNameInput}
                />
                {firstNameHasError && <p>First name must not be empty</p>}
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>{lastName}</label>
                </div>
                <input
                    type="text"
                    className={`input ${lastNameHasError ? "invalid" : ""}`}
                    onBlur={lastNameOnBlur}
                    onChange={lastNameOnChange}
                    value={lastNameInput}
                />
                {lastNameHasError && <p>Last name must not be empty</p>}
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>{email}</label>
                </div>
                <input
                    type="text"
                    className={`input ${emailHasError ? "invalid" : ""}`}
                    onBlur={emailOnBlur}
                    onChange={emailOnChange}
                    value={emailInput}
                />
                {emailHasError && <p>Email is invalid(must have @)</p>}
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>{password}</label>
                </div>
                <input
                    type="text"
                    className={`input ${passwordHasError ? "invalid" : ""}`}
                    onBlur={passwordOnBlur}
                    onChange={passwordOnChange}
                    value={passwordInput}
                />
                {passwordHasError && <p>Password must have at least 5</p>}
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
