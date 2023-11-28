import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: []
    },

    reducers: {
        //addItem is 'action'
        //()=>{} is 'reducer'

        addItem: (state, action)=> {
            //mutating the state here
            state.items.push(action.payload);
        },

        removeItem: (state, action)=> {
            state.items.pop();
        },

        clearCart : (state)=> {
            state.items.length= 0;
        },
    },
});

//cartSlices will be like a big object which has actions and reducers
export const{addItem, removeItem, clearCart}= cartSlice.actions;

export default cartSlice.reducer;