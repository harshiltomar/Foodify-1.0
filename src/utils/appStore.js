import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore= configureStore({

    // This is one big 'reducer' for the whole app and it can contain multiple smaller reducers
    reducer: {
        cart: cartReducer,
        use: userReducer
    }
});

export default appStore;