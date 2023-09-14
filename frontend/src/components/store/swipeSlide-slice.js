import {createSlice} from '@reduxjs/toolkit';

const initialValue = {current: 0, swipeClicked: false, indexSwiped: 4};

const swipeSlide = createSlice({
    name: 'swipeSlice',
    initialState: initialValue,
    reducers: {
        swipe(state, payload) {
            state.current = state.current + payload.payload;
            state.indexSwiped = state.indexSwiped + payload.payload;
            state.swipeClicked = true;
        },
    },
});

export const swipeSliceActions = swipeSlide.actions;

export default swipeSlide.reducer;
