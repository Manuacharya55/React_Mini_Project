import { createContext, useEffect } from "react";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Air Jordan 4 RM",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f8aa60fa-7679-4074-8ea2-ead3813a50a3/AIR+JORDAN+4+RM.png",
      price: "₹ 12795.00",
    },
    {
      id: 2,
      name: "Jumpman MVP",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a72a7c2d-0d61-499a-9042-58a2a022083b/JORDAN+MVP.png",
      price: "₹ 15295.00",
    },
    {
      id: 3,
      name: "Air Jordan 1 Low",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc702cb7-ae0c-4c5a-b132-21c8f4ec93f8/AIR+JORDAN+1+LOW.png",
      price: "₹ 10795.00",
    },
    {
      id: 4,
      name: "Air Jordan 1",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8f5874ee-4398-4516-a168-c034a9abbb3b/AIR+JORDAN+1+LOW+Q54.png",
      price: "₹ 12795.00",
    },
    {
      id: 5,
      name: "Air Jordan Mule",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bfcbed6f-9095-4276-93fa-30836d987033/AIR+JORDAN+MULE.png",
      price: "₹ 8695.00",
    },
    {
      id: 6,
      name: "Air Jordan Retro",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/249a9f06-de0f-4bf1-8734-6217f7cca2a1/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      price: "₹ 16995.00",
    },
  ];

  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  return (
    <CartContext.Provider value={{ products, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
