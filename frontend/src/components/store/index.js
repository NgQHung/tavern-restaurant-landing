import swipeSlide from "./swipeSlide-slice";
import { configureStore } from "@reduxjs/toolkit";
import actionsSlice from "./actions-slice";

const store = configureStore({
    reducer: {
        swipeSlide: swipeSlide,
        actionsSlice: actionsSlice,
    },
});

export default store;
