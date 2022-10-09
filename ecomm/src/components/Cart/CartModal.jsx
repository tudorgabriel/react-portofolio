import { React } from "react";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import "../Cart/CartModal.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CartModal() {
  const { cart } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(CartContext);
  const { total } = useContext(CartContext);
  const { removeAllItems } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsOpen(!isOpen);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
    toggleIsCartOpen();
  };
  return (
    <div className="modal">
      <header>
        <h3 className="htitle"> My bag</h3>
        <div className="close-sec">
          <AiOutlineClose onClick={toggleIsCartOpen} className="x-icon" />
        </div>
      </header>
      {cart.map((item, i) => {
        return (
          <>
            <section key={i}>
              <div className="img-product">
                <img className="img-cart" src={item.image} alt="" />
              </div>
              <div className="product-details">
                <p> {item.title}</p>
                <p>Price:{item.price} $</p>
                <p>Quantity: {item.quantity}</p>
                <span>
                  <AiFillDelete
                    onClick={() => removeAllItems(item)}
                    className="delete-icon"
                  />
                </span>
              </div>
            </section>
          </>
        );
      })}
      {cart.length > 0 ? (
        <>
          <div className="buttons-section">
            <div className="btn1">
              <button onClick={handleClick}> VIEW BAG</button>
            </div>
          </div>
          <h2>Total {total}: $</h2>
        </>
      ) : (
        <p className="empty-msg">Your cart is empty</p>
      )}
    </div>
  );
}
export default CartModal;
