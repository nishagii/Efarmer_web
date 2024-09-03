import axios from "axios";
import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
// import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => { 

    const [cartItems, setCartItems] = useState({});

    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const[all_product,setAllProduct] = useState([]);


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 5 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 5}))
            console.log(cartItems);
        }
       
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 5}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id == item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchAllProduct = async () => { 
        const response = await axios.get(url + '/api/fvege/list');
        setAllProduct(response.data.data);
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
           if(cartItems[item] > 0) {
               totalItem += cartItems[item];
           }
        }
        return (totalItem/5);
    }

    useEffect(() => {
        
        async function loadData() { 
            await fetchAllProduct();
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem('token'));
            }
        }
        loadData();
    }, [])

    const contextValue = { all_product, setCartItems, cartItems, addToCart, removeFromCart, getTotalCartItems, getTotalCartAmount,url,token,setToken };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;