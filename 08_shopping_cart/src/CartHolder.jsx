import { useContext } from "react";
import { CartContext } from "./Context.jsx";
import CartProduct from "./CartProduct.jsx";
const CartHolder = () => {
  const { cart,setCart } = useContext(CartContext);
  let price = 0;
  return (
    <div className="cart-products">
      {cart.map((product, index) => {
         price += parseInt((product.price.split(" ")[1])) * product.quantity;
        return <CartProduct key={index} product={product} index={index}/>;
      })}

      <div className="price">
        <h1>Total Price : ₹{price}</h1>
      </div>
    </div>
  );
};

export default CartHolder;
