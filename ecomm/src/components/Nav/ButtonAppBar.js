import React, { useContext, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import '../Nav/ButtonAppBar.scss';
import { CartContext } from "../../context/cart.context";
import CartModal from "../Cart/CartModal";
import '../../components/Cart/CartModal.scss';
import '../../context/products.context';
import { ProductsContext } from "../../context/products.context";
import { useNavigate } from "react-router-dom";
export default function ButtonAppBar() {
    const { isOpen, setIsOpen } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    const { cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsOpen(!isOpen);
    const { handleSearch } = useContext(ProductsContext);
    const { searchInput, setSearchInput } = useContext(ProductsContext)
    const navigate = useNavigate();

    return (
        <>
            <section className="nav">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/cart">Cart <AiOutlineShoppingCart /></a>
            </section>

            <div className="second-hed">
                <div className="search">
                    {searchInput != null && <AiOutlineSearch onClick={() => { navigate('/products') }} className="i" />}
                    <label for="search"></label>
                    <input
                        onChange={handleSearch}
                        value={searchInput}
                        placeholder="Search for items and brands" type="search" id="gsearch" name="gsearch"></input>
                </div>

            </div>


        </>
    );
}
