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
            console.log(state.token);
            localStorage.setItem("user", state.token);
        },
        logout(state, action) {
            state.token = null;
            // localStorage.removeItem("Token");
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
