import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    token: "",
    isLoggedIn: false,
};
// const userIsLoggedIn = !!initialValue.token;

const authSlice = createSlice({
    name: "authentication",
    initialState: initialValue,
    reducers: {
        login(state, action) {
            state.token = action.payload;
            localStorage.setItem("Token", action.payload);
        },
        logout(state, action) {
            state.token = null;
            localStorage.removeItem("Token");
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;
