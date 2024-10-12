import React, { useContext } from "react";
import { CartContext } from "./Context.jsx";

const ProductCard = () => {
  const { products, setCart, cart } = useContext(CartContext);

  const addToCart = (productId) => {
    const product = products.find((ele) => ele.id === productId);
    const index = cart.findIndex((prod) => prod.id === product.id);
    if (index === -1) {
      const productObj = { ...product, quantity: 1 };
      setCart((prev) => [...prev, productObj]);
    } else {
      const cartProduct = cart.map((curProduct, curIndex) => {
        if (curIndex === index) {
          return { ...curProduct, quantity: (curProduct.quantity += 1) };
        }else{
          return curProduct
        }
      });
      setCart(cartProduct)
    }
  };

  return products.map((curProduct) => (
    <div className="card" key={curProduct.id}>
      <img src={curProduct.image} alt="" />

      <div className="details">
        <h2>{curProduct.name}</h2>
        <h1>{curProduct.price}</h1>
        <button className="add" onClick={() => addToCart(curProduct.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  ));
};

export default ProductCard;
