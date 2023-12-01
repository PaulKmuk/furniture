import { configureStore } from "@reduxjs/toolkit";

import shoppingSlice from "./shoppingSlice";


export default configureStore({
    reducer: {
        shopping: shoppingSlice
    }
})