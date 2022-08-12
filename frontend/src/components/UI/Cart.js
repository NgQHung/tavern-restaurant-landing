import React, { Fragment, useEffect } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { actionsAction } from "../store/actions-slice";
import "./Cart.css";
import useInput from "../hooks/use-input";
import { userLogin, userSignup } from "../store/http-slice";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        input: firstNameInput,
        isValid: firstNameIsValid,
        isInvalid: firstNameHasError,
        inputOnBlur: firstNameOnBlur,
        inputOnChange: firstNameOnChange,
    } = useInput((input) => input.trim() !== "");
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

    const backHandler = () => {
        navigate("/");
    };

    const signupHandler = (e) => {
        e.preventDefault();
        dispatch(
            userSignup({
                // firstNameInput,
                // lastNameInput,
                emailInput,
                passwordInput,
            })
        );
    };

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(
            userLogin({
                emailInput,
                passwordInput,
            })
        );
        console.log(emailInput, passwordInput);
    };

    // signup content
    const signupContent = (
        <Fragment>
            <h3 className="title__modal">Signup Modal</h3>

            <div className="input__section">
                <div className="input__place">
                    <label>Your First Name</label>
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
                    <label>Your Last Name</label>
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
                    <label>Your Email</label>
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
                    <label>Your Password</label>
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

    // login content
    const loginContent = (
        <Fragment>
            <h3 className="title__modal">Login Modal</h3>
            <div className="input__section">
                <div className="input__place">
                    <label>Your Email</label>
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
                    <label>Your Password</label>
                </div>
                <input
                    type="text"
                    className={`input ${passwordHasError ? "invalid" : ""}`}
                    onBlur={passwordOnBlur}
                    onChange={passwordOnChange}
                    value={passwordInput}
                />
                {passwordHasError && <p>Password must have at least 5</p>}
                {/* {isLoggedIn && navigate("/")} */}
            </div>
        </Fragment>
    );
    const pathName = location.pathname;

    return (
        // <Modal>
        <form onSubmit={pathName === "/login" ? loginHandler : signupHandler}>
            <div className="content__place">
                {pathName === "/login" && loginContent}
                {pathName === "/signup" && signupContent}
            </div>
            <div className="input__button">
                <button className="submit">Submit</button>
                <button onClick={backHandler} className="cancel">
                    Back
                </button>
            </div>
        </form>
        // </Modal>
    );
}

export default Cart;
