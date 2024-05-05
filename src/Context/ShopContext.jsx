import React, { createContext, useState } from "react";
import all_Product from "../Components/Assets/all_product.js"


export const ShopContext = createContext(null);
const getDefaultCart =()=>{
    let cart={};
    for (let index = 0; index < all_Product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}

const ShopContextProvider =(props)=>{
    const[cartItem, setcartItem]= useState(getDefaultCart());
    
    const addToCart =(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(itemId)
    }
    console.log(cartItem);
    const removeFromCart =(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount =()=>{
        let totalAmount =0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_Product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItem[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems =()=>{
        let totalItem=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem+=cartItem[item]
            }
        }
        return totalItem;
    }
    const contextValue ={getTotalCartItems,getTotalCartAmount, all_Product,cartItem, addToCart,removeFromCart}

    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider