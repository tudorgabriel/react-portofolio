import '../Cart/Cart.scss'
import React, { useContext } from 'react'
import { CartContext } from "../../context/cart.context";


function Cart() {
    const { cart } = useContext(CartContext);
    const { addItemToCart } = useContext(CartContext)
    const { removeItemToCart } = useContext(CartContext)
    const { removeAllItems } = useContext(CartContext)
    const { total } = useContext(CartContext)

    return (
        <>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>

                {cart.map((item, i) => {
                    return (
                        <tr>

                            <td><img className="img" src={item.image} alt='' /> </td>
                            <td>{item.title} </td>
                            <td> <button onClick={() => addItemToCart(item)}>+</button> {item.quantity} <button onClick={() => removeItemToCart(item)}>-</button></td>
                            <td>{item.price * item.quantity} $ </td>
                            <td><button onClick={() => removeAllItems(item)}>Remove</button> </td>
                        </tr>
                    )
                })}
            </table>
            <h2 className='total'>Total: {total} $ </h2>
        </>
    )

}

export default Cart