import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id != productToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const removeAll = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)
    if (existingCartItem) {
        return cartItems.filter((cartItem) => cartItem.id != productToRemove.id)
    }
}

export const CartContext = createContext({
    cart: [],
    addItemToCart: () => { },
    removeItemToCart: () => { }

});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCart(addCartItem(cart, productToAdd))
    }
    const removeItemToCart = (productToRemove) => {
        setCart(removeCartItem(cart, productToRemove))

    }
    const removeAllItems = (productToRemove) => {
        setCart(removeAll(cart, productToRemove))
    }
    useEffect(() => {
        const newCartCount = cart.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const totalPrice = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
        setCartCount(newCartCount)
        setTotal(totalPrice)
    }, [cart])
    const value = { isOpen, setIsOpen, cart, setCart, addItemToCart, cartCount, total, removeItemToCart, removeAllItems };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}