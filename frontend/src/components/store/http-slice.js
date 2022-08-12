import { authActions } from "./Auth-slice";

const urlSignup = "/api/user/signup";
const urlLogin = "/api/user/login";

export const userSignup = (data) => {
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
                throw new Error("failed to post data");
            } else {
                localStorage.setItem("user", JSON.stringify(json));
                console.log(JSON.stringify(json));
                console.log("data sent");
            }
            // return data;
        };
        try {
            const data = await SendRequest();
            // dispatch({
            //     // firstNameInput: firstNameInput,
            //     // lastNameInput: lastNameInput,
            //     emailInput: emailInput,
            //     passwordInput: passwordInput,
            // });
        } catch (error) {
            console.log(error);
        }
    };
};
