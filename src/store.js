import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'
const store=configureStore({
    reducer:{
        cart:cartReducer,
        wishlist:wishListReducer,
        
    }
})
export default store;