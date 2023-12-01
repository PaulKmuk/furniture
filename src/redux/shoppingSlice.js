import { createSlice } from "@reduxjs/toolkit";

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
        openShoppingCart: false,
        shoppingCart: []
    },
    reducers: {
        addElement: (state, action) => {
            state.shoppingCart.push(action.payload)
        },
        removeElement: (state, action) => {
            state.shoppingCart = action.payload
        },
        changeAmountElement: (state, action) => {
            state.shoppingCart = action.payload
        },
        removeAllElements: (state) => {
            state.shoppingCart = []
        },
        openCart: (state) => {
            state.openShoppingCart = true
        },
        closeCart: (state) => {
            state.openShoppingCart = false
        }
    }
})

export const { addElement, removeElement, removeAllElements, openCart, closeCart, changeAmountElement } = shoppingSlice.actions

export default shoppingSlice.reducer