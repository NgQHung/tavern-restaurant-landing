import { authActions } from "./Auth-slice";

export const fetchData = () => {
    return async (dispatch) => {
        const sendResquest = async () => {
            const response = fetch("https://react-http-973bc-default-rtdb.firebaseio.com/tavern");
        };
    };
};

export const createDataSignup = (data) => {
    return async (dispatch) => {
        const { firstNameInput, lastNameInput, emailInput, passwordInput } = data;
        const sendResquest = async () => {
            const response = await fetch(
                "https://react-http-973bc-default-rtdb.firebaseio.com/tavern-signup.json",
                {
                    method: "POST",
                    body: JSON.stringify({
                        firstNameInput: firstNameInput,
                        lastNameInput: lastNameInput,
                        emailInput: emailInput,
                        passwordInput: passwordInput,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("failed to post data");
            } else {
                console.log("data sent");
            }
            const data = await response.json();
            return data;
        };
        try {
            const data = await sendResquest();
            dispatch({
                firstNameInput: firstNameInput,
                lastNameInput: lastNameInput,
                emailInput: emailInput,
                passwordInput: passwordInput,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const authentication = (data) => {
    return async (dispatch) => {
        const { emailInput, passwordInput } = data;
        const sendResquest = async () => {
            const response = await fetch(
                "https://react-http-973bc-default-rtdb.firebaseio.com/tavern-login.json",
                {
                    method: "POST",
                    body: JSON.stringify({
                        emailInput: emailInput,
                        passwordInput: passwordInput,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("failed to post data");
            } else {
                console.log("data sent");
            }
            const data = await response.json();
            return data;
        };
        try {
            const data = await sendResquest();
            dispatch(authActions.login(data.idToken));
        } catch (error) {
            console.log(error.message);
        }
    };
};
