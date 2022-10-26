import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import "../Cart/CartModal.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CartModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cart } = useContext(CartContext);
  const { total } = useContext(CartContext);
  const { removeAllItems } = useContext(CartContext);
  const { addItemToCart } = useContext(CartContext);
  const { removeItemToCart } = useContext(CartContext);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
    setOpen(false);
  };

  return (
    <div>
      <Button className="cart-btn" onClick={handleOpen}>
        <AiOutlineShoppingCart />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="modal" sx={style}>
            <h3 className="h-bag"> My bag </h3>
            {cart.map((item, index) => {
              return (
                <>
                  <section className="cart-section">
                    <div className="img-prod">
                      <img className="img-cart" src={item.image} alt="" />
                    </div>
                    <div className="infos-prod">
                      <h3>{item.title.substr(0, 20)}</h3>
                      <p> Price: {item.price} $</p>
                      <p>Qty : {item.quantity}</p>
                      <button
                        onClick={() => addItemToCart(item)}
                        className="increment-btn"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItemToCart(item)}
                        className="increment-btn"
                      >
                        -
                      </button>
                      <br></br>
                      <AiFillDelete
                        onClick={() => removeAllItems(item)}
                        className="delete-icon"
                      />
                    </div>
                  </section>
                </>
              );
            })}
            <section className="buttons-section">
              <button onClick={handleClick}>View Bag</button>
              <button>Checkout</button>
            </section>
            <div className="footer-mod">
              <h4>Total : {total} $</h4>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
