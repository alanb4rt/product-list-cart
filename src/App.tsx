import { createContext, useState } from "react";
import Cart from "./components/Cart";
import ListItem from "./components/ListItem";
import OrderModal from "./components/OrderModal";
import { ItemsType } from "./types/items.type";
import { CartContextType } from "./types/cartContext.type";

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
  isOpenModal: false,
  setIsOpenModal: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState<ItemsType[]>([]);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <>
      <CartContext
        value={{ cartItems, setCartItems, isOpenModal, setIsOpenModal }}
      >
        <main className="container mx-auto px-4 py-16">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
            <ListItem />
            <Cart />
          </div>
        </main>
        <OrderModal />
      </CartContext>
    </>
  );
}
