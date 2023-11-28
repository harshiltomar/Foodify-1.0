import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems= useSelector((store)=> store.cart.items)
    const dispatch= useDispatch();
    
    const handleClearCart=()=> {
        dispatch(clearCart());
    }

    return (
        <div className="grocery-container">
            <h1>CART</h1>
            <button className="add-button" onClick={
                handleClearCart
            }>Clear Cart</button>
            {cartItems.length===0 && <h1>Cart is Empty. Add Items to the Cart!</h1>}
            <div>
                <ItemList items={cartItems}/>
            </div>
        </div>
    );
};

export default Cart;
