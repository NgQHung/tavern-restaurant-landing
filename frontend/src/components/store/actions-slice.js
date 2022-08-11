import { createSlice } from "@reduxjs/toolkit";

const initialValue = { isSignupOpen: false, isLoginOpen: false, cartContent: null };

const actionsSlice = createSlice({
    name: "actions",
    initialState: initialValue,
    reducers: {
        openSignup(state) {
            state.isSignupOpen = true;
        },
        openLogin(state) {
            state.isLoginOpen = true;
        },
        closeLogin(state) {
            state.isLoginOpen = false;
        },
        closeSignup(state) {
            state.isSignupOpen = false;
        },
        handleCart(state) {
            if (state.isSignupOpen) {
                state.cartContent = {
                    title: "Signup Modal",
                    firstName: "Your First Name",
                    lastName: "Your Last Name",
                    email: "Enter Your E-mail",
                    password: "Enter Your password",
                };
            } else if (state.isLoginOpen) {
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
