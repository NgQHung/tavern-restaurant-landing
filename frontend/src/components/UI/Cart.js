import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux/es/exports';
import './Cart.css';
import useInput from '../hooks/use-input';
import {userLogin, userSignup} from '../store/http-slice';
import {useLocation, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import Modal from './Modal';

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((state) => state.authSlice.user);
    // let user = JSON.parse(localStorage.getItem('user'));

    const {
        input: firstNameInput,
        isInvalid: firstNameHasError,
        inputOnBlur: firstNameOnBlur,
        inputOnChange: firstNameOnChange,
    } = useInput((input) => input.trim() !== '');
    const {
        input: lastNameInput,
        isInvalid: lastNameHasError,
        inputOnBlur: lastNameOnBlur,
        inputOnChange: lastNameOnChange,
    } = useInput((input) => input.trim() !== '');
    const {
        input: emailInput,
        isInvalid: emailHasError,

        inputOnBlur: emailOnBlur,
        inputOnChange: emailOnChange,
    } = useInput((input) => input.includes('@'));
    const {
        input: passwordInput,
        isInvalid: passwordHasError,
        inputOnBlur: passwordOnBlur,
        inputOnChange: passwordOnChange,
    } = useInput((input) => input.length > 5);

    const backHandler = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const signupHandler = (e) => {
        e.preventDefault();
        if (firstNameHasError) {
            toast.error('First name must not be empty');
            return;
        }
        if (lastNameHasError) {
            toast.error('Last name must not be empty');
            return;
        }
        if (emailHasError) {
            toast.error('Email is invalid(must have @)');
            return;
        }
        if (passwordHasError) {
            toast.error('Password must have at least 5');
            return;
        }
        dispatch(
            userSignup({
                // firstNameInput,
                // lastNameInput,
                emailInput,
                passwordInput,
            })
        );

        navigate('/');
        toast.success('You are signed up successfully');
    };

    const loginHandler = (e) => {
        e.preventDefault();
        if (emailHasError) {
            toast.error('Email is invalid(must have @)');
            return;
        }
        if (passwordHasError) {
            toast.error('Password must have at least 5');
            return;
        }
        dispatch(
            userLogin({
                emailInput,
                passwordInput,
            })
        );
        // if (user) {
        // navigate('/');
        // }
    };
    useEffect(() => {
        console.log('running...');
        if (user) {
            navigate('/');
            toast.success('You are logged up successfully');
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    // signup content
    const signupContent = (
        <Fragment>
            <h3 className="title__modal">Signup Modal</h3>

            <div className="input__section">
                <div className="input__place">
                    <label>Your First Name</label>
                </div>
                <input
                    className={`input ${firstNameHasError ? 'invalid' : ''}`}
                    onBlur={firstNameOnBlur}
                    onChange={firstNameOnChange}
                    type="text"
                    value={firstNameInput}
                />
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>Your Last Name</label>
                </div>
                <input
                    type="text"
                    className={`input ${lastNameHasError ? 'invalid' : ''}`}
                    onBlur={lastNameOnBlur}
                    onChange={lastNameOnChange}
                    value={lastNameInput}
                />
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>Your Email</label>
                </div>
                <input
                    type="text"
                    className={`input ${emailHasError ? 'invalid' : ''}`}
                    onBlur={emailOnBlur}
                    onChange={emailOnChange}
                    value={emailInput}
                />
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>Your Password</label>
                </div>
                <input
                    type="text"
                    className={`input ${passwordHasError ? 'invalid' : ''}`}
                    onBlur={passwordOnBlur}
                    onChange={passwordOnChange}
                    value={passwordInput}
                />
            </div>
        </Fragment>
    );

    // login content
    const loginContent = (
        <Fragment>
            {/* <div className="modal"> */}
            <h3 className="title__modal">Login Modal</h3>
            <div className="input__section">
                <div className="input__place">
                    <label>Your Email</label>
                </div>
                <input
                    type="text"
                    className={`input ${emailHasError ? 'invalid' : ''}`}
                    onBlur={emailOnBlur}
                    onChange={emailOnChange}
                    value={emailInput}
                />
            </div>
            <div className="input__section">
                <div className="input__place">
                    <label>Your Password</label>
                </div>
                <input
                    type="text"
                    className={`input ${passwordHasError ? 'invalid' : ''}`}
                    onBlur={passwordOnBlur}
                    onChange={passwordOnChange}
                    value={passwordInput}
                />
            </div>
            {/* </div> */}
        </Fragment>
    );
    const pathName = location.pathname;

    return (
        // <Modal>
        <form className="modal" onSubmit={pathName === '/login' ? loginHandler : signupHandler}>
            <div className="content__place">
                {pathName === '/login' && loginContent}
                {pathName === '/signup' && signupContent}
            </div>
            <div className="input__button">
                <button className="submit">Submit</button>
                <button onClick={backHandler} className="cancel">
                    Back
                </button>
            </div>
            <div>
                {pathName === '/login' && (
                    <button type="button" onClick={() => navigate('/signup')}>
                        Signup
                    </button>
                )}
                {pathName === '/signup' && (
                    <button type="button" onClick={() => navigate('/login')}>
                        Login
                    </button>
                )}
            </div>
        </form>
        // </Modal>
    );
}

export default Cart;
