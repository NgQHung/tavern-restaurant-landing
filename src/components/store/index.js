import swipeSlide from "./swipeSlide-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        swipeSlide: swipeSlide,
    },
});

export default store;
