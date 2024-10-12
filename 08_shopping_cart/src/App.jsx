import ProductCard from "./ProductCard";
import { CartProvider } from "./Context.jsx";
import CartHolder from "./CartHolder.jsx";

function App() {
  return (
    <CartProvider>
      <div className="container">
        <div className="products">
          <ProductCard></ProductCard>
        </div>
        <div className="cart">
          <h1>Cart</h1>
          <CartHolder></CartHolder>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
