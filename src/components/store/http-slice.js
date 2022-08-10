export const fetchData = () => {
    return async (dispatch) => {
        const sendResquest = async () => {
            const response = fetch("https://react-http-973bc-default-rtdb.firebaseio.com/tavern");
        };
    };
};

export const createData = (data) => {
    return async (dispatch) => {
        const { firstNameInput, lastNameInput, emailInput, passwordInput } = data;
        const sendResquest = async () => {
            const response = await fetch(
                "https://react-http-973bc-default-rtdb.firebaseio.com/tavern.json",
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
