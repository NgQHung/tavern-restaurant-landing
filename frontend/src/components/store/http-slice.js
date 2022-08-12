import { actionsAction } from "./actions-slice";
import { authActions } from "./Auth-slice";

const urlSignup = "/api/user/signup";
const urlLogin = "/api/user/login";

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
                method: "POST",
                body: JSON.stringify(
                    // firstNameInput: firstNameInput,
                    // lastNameInput: lastNameInput,
                    { email: emailInput, password: passwordInput }
                ),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            console.log(json);
            if (!response.ok) {
                throw new Error("Something went wrong");
            } else {
                user = JSON.stringify(json);
                console.log("You are Signed up");
            }
            // return data;
        };
        try {
            const data = await SendRequest();
            dispatch(authActions.login(user));
            dispatch(actionsAction.closeSignup());
        } catch (error) {
            console.log(error);
        }
    };
};
export const userLogin = (data) => {
    console.log(data);
    let user;
    return async (dispatch) => {
        const { emailInput, passwordInput } = data;
        const SendRequest = async () => {
            const response = await fetch(urlLogin, {
                method: "POST",
                body: JSON.stringify({ email: emailInput, password: passwordInput }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            console.log(json);
            if (!response.ok) {
                throw new Error("Your Email or Password is Incorrect");
            } else {
                user = JSON.stringify(json);
                console.log("You are logged in");
            }
        };
        try {
            const data = await SendRequest();
            dispatch(authActions.login(user));
            dispatch(actionsAction.closeLogin());
        } catch (error) {
            console.log(error);
        }
    };
};
