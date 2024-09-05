import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";


export const store = configureStore({

    
    reducer:{
    count:counterSlice,
    auth:authSlice,
    cart:shoppingCartSlice
}
    
})