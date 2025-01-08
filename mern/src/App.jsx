import Cart from "./Cart";
import Display from "./Display";
import CartProvider from "./CartContext";
export default function App() {
  return (
    <CartProvider>
      <div className="flex">
        <Display />
        <Cart />
      </div>
    </CartProvider>
  );
}
