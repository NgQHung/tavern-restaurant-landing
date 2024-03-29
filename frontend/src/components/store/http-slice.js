import {toast} from 'react-toastify';
import {actionsAction} from './actions-slice';
import {authActions} from './Auth-slice';
import {useNavigate} from 'react-router-dom';

const urlSignup = '/api/user/signup';
const urlLogin = '/api/user/login';

export const userSignup = (data) => {
    let user;
    return async (dispatch) => {
        const {
            // firstNameInput, lastNameInput,
            emailInput,
            passwordInput,
        } = data;
        const SendRequest = async () => {
            const response = await fetch(urlSignup, {
                method: 'POST',
                body: JSON.stringify(
                    // firstNameInput: firstNameInput,
                    // lastNameInput: lastNameInput,
                    {email: emailInput, password: passwordInput}
                ),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await response.json();
            // console.log(json);
            if (!response.ok) {
                toast.error('Something went wrong');
            } else {
                user = JSON.stringify(json);
            }
            // return data;
        };
        try {
            await SendRequest();
            dispatch(authActions.login(user));
            // dispatch(actionsAction.closeSignup());
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };
};
export const userLogin = (data) => {
    let user;

    return async (dispatch) => {
        const {emailInput, passwordInput} = data;

        const SendRequest = async () => {
            const response = await fetch(urlLogin, {
                method: 'POST',
                body: JSON.stringify({email: emailInput, password: passwordInput}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await response.json();
            if (!response.ok) {
                toast.error('Your Email or Password is Incorrect');
                toast.error(json.error);
            } else {
                user = JSON.stringify(json);
            }
        };
        try {
            await SendRequest();
            dispatch(authActions.login(user));
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };
};
