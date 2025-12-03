import React, { createContext, useState, useEffect } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    });

    const [cartSizes, setCartSizes] = useState(() => {
        const savedSizes = localStorage.getItem("cartSizes");
        return savedSizes ? JSON.parse(savedSizes) : {};
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("cartSizes", JSON.stringify(cartSizes));
    }, [cartSizes]);


    const addTocart = (itemId, size = 'M') => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1,
        }));
        setCartSizes((prev) => ({
            ...prev,
            [itemId]: size,
        }));
    };


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
    };


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find(
                    (product) => product.id === Number(item)
                );
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };


    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        cartSizes,
        addTocart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
