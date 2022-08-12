import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    token: "",
    isLoggedIn: false,
    email: "",
    user: "",
};

// const userIsLoggedIn = !!initialValue.token;

const authSlice = createSlice({
    name: "authentication",
    initialState: initialValue,
    reducers: {
        login(state, action) {
            state.token = action.payload;
            // console.log(state.token);
            localStorage.setItem("user", state.token);
            state.isLoggedIn = true;
            const user = JSON.parse(action.payload);
            state.user = user;
            state.email = user.email;
        },
        logout(state, action) {
            state.token = null;
            state.user = null;
            localStorage.removeItem("Token");
            state.isLoggedIn = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
