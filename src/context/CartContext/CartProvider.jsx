// CartProvider.jsx
import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                // Si ya existe, incrementar cantidad
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id 
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                        : cartItem
                );
            }
            // Si es nuevo, agregar con cantidad 1
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    const values = {
        cart, 
        addToCart,        // ← Nombre que espera el Cart
        removeFromCart,   // ← Función que necesita el Cart
        getTotalItems,    // ← Ahora suma cantidades correctamente
        getTotalPrice,    // ← Función que necesita el Cart
        clearCart
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};