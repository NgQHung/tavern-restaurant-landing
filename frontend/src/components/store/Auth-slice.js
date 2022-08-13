import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    token: "",
    email: "",
    user: "",
    hasError: "false",
};

// const userIsLoggedIn = !!initialValue.token;

const authSlice = createSlice({
    name: "authentication",
    initialState: initialValue,
    reducers: {
        login(state, action) {
            state.token = action.payload;
            localStorage.setItem("user", state.token);
            const user = JSON.parse(action.payload);
            state.user = user;
            state.email = user.email;
            console.log(user);
        },
        logout(state, action) {
            state.token = null;
            state.user = null;
            localStorage.removeItem("user");
        },
        setError(state) {
            state.hasError = true;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
