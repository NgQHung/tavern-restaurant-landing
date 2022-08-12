import swipeSlide from "./swipeSlide-slice";
import { configureStore } from "@reduxjs/toolkit";
import actionsSlice from "./actions-slice";
import authSlice from "./Auth-slice";

const store = configureStore({
    reducer: {
        swipeSlide: swipeSlide,
        actionsSlice: actionsSlice,
        authSlice: authSlice,
    },
});

export default store;
