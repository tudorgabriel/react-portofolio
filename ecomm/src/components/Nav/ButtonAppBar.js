import React, { useContext, useState } from "react";

import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import '../Nav/ButtonAppBar.scss';
import { CartContext } from "../../context/cart.context";
import '../../components/Cart/CartModal.scss';
import '../../context/products.context';
import { ProductsContext } from "../../context/products.context";
import { useNavigate, Link } from "react-router-dom";
import CartModal from "../Cart/CartModal";
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

                <Link to={'/'}> Home</Link>
                <Link to={'/products'}> Products</Link>
                <CartModal />
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
