import React, { useState, createContext } from 'react'
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
    handleSearch: () => { }

});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = (e) => {
        setSearchInput(e.target.value.toLowerCase())

    }
    const value = { products, searchInput, setSearchInput, handleSearch }




    return (
        <ProductsContext.Provider value={value} > {children}</ProductsContext.Provider>
    )
}