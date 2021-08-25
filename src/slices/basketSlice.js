import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {},
        removeFromBasket: (state, action) => {}
    }
})

export const { addToBasket, removeFromBasket } = (state) =>  state.basket.actions;

export default basketSlice.reducer;