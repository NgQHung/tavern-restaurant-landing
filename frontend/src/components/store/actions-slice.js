import { createSlice } from "@reduxjs/toolkit";

const initialValue = { isSignupOpen: false, isLoginOpen: false, cartContent: null };

const actionsSlice = createSlice({
    name: "actions",
    initialState: initialValue,
    reducers: {
        handleCart(state, action) {
            if (action.payload === "/signup") {
                state.cartContent = {
                    title: "Signup Modal",
                    firstName: "Your First Name",
                    lastName: "Your Last Name",
                    email: "Enter Your E-mail",
                    password: "Enter Your password",
                };
            } else if (action.payload === "/login") {
                state.cartContent = {
                    title: "Login Modal",
                    email: "Enter Your E-mail",
                    password: "Your Password",
                };
            }
        },
    },
});

export const actionsAction = actionsSlice.actions;

export default actionsSlice.reducer;
