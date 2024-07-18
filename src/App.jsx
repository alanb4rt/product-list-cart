import { createContext, useState } from "react";
import Cart from "./components/Cart";
import ListItem from "./components/ListItem";

export const CartContext = createContext();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
          <CartContext.Provider value={{ cartItems, setCartItems }}>
            <ListItem />
            <Cart />
          </CartContext.Provider>
        </div>
      </main>
    </>
  );
}
