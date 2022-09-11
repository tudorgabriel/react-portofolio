import React, { useContext, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../Nav/ButtonAppBar.scss';
import { CartContext } from "../../context/cart.context";
import CartModal from "../Cart/CartModal";
import '../../components/Cart/CartModal.scss';

export default function ButtonAppBar() {
    const { isOpen, setIsOpen } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    const { cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsOpen(!isOpen);



    return (
        <>
            <Box sx={{
                flexGrow: 1,
                boxShadow: 1,
                color: 'primary.main'
            }}>
                <AppBar position="static" color='default'>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            My new store
                        </Typography>
                        < AiOutlineShoppingCart onClick={toggleIsCartOpen} />  <Button onClick={toggleIsCartOpen} color="inherit">{cartCount} Cart</Button>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

            </Box>
            {isOpen && < CartModal className='test' />}
        </>
    );
}
