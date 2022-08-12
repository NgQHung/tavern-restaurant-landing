import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    token: "",
    isLoggedIn: false,
    email: "",
};

// const userIsLoggedIn = !!initialValue.token;

const authSlice = createSlice({
    name: "authentication",
    initialState: initialValue,
    reducers: {
        login(state, action) {
            state.token = action.payload;
            localStorage.setItem("user", state.token);
            state.isLoggedIn = true;
            const email = JSON.parse(action.payload);
            state.email = email.email;
        },
        logout(state, action) {
            state.token = null;
            localStorage.removeItem("Token");
            state.isLoggedIn = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
