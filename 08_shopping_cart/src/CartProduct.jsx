import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "./Context.jsx";


const CartProduct = ({ product, index }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleDelete = (cartindex) => {
    setCart((prev) => {
      return prev.filter((item, itemindex) => itemindex !== cartindex);
    });
  };

  const handleDecrement = (cartindex) => {
    const updatedcart = cart.map((item, itemindex) => {
      if (itemindex === cartindex && item.quantity > 1)
        return { ...item, quantity: (item.quantity -= 1) };
      else {
        return item;
      }
    });
    setCart(updatedcart);
  };

  const handleIncrement = (cartindex) => {
    const updatedcart = cart.map((item, itemindex) => {
      if (itemindex === cartindex)
        return { ...item, quantity: (item.quantity += 1) };
      else {
        return item;
      }
    });
    setCart(updatedcart);
  };

  
  return (
    <div className="prod">
      <img src={product.image} alt="" />
      <div className="prod-detail">
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
      </div>
      <div className="quantity">
        <button onClick={() => handleIncrement(index)}>
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="xl"
            style={{ color: "#087ea4" }}
          />
        </button>
        <h2>{product.quantity}</h2>
        <button onClick={() => handleDecrement(index)}>
          <FontAwesomeIcon
            icon={faCircleMinus}
            size="xl"
            style={{ color: "#087ea4" }}
          />
        </button>
      </div>

      <button onClick={() => handleDelete(index)}>
        <FontAwesomeIcon
          icon={faTrash}
          size="xl"
          style={{ color: "#087ea4" }}
        />
      </button>
    </div>
  );
};

export default CartProduct;
