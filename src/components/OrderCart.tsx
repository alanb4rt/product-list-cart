import { useContext } from "react";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import TotalPrice from "./TotalPrice";
import { removeItemToCart } from "../utils/removeItemToCart";
import { CartContext } from "../App";
import CartItem from "./CartItem";

export default function OrderCart() {
  const { cartItems, setCartItems, setIsOpenModal } = useContext(CartContext);

  const handleItem = (name: string) => {
    removeItemToCart(name, cartItems, setCartItems);
  };

  const hasManyItems = cartItems.length > 4
    ? "w-[calc(100%+2rem)] overflow-y-scroll pr-2"
    : ""

  return (
    <>
      <ul
        className={`max-h-96 ${hasManyItems}`}
      >
        {cartItems.map((item) => (
          <CartItem
            key={item.name}
            item={item}
            onClick={() => handleItem(item.name)}
            confirmOrder={false}
          />
        ))}
      </ul>
      <TotalPrice />
      <div className="flex justify-center items-center gap-2 bg-rose-50 p-4 rounded mb-8">
        <img src={iconCarbonNeutral} alt="Icon Carbon Neutral" />
        <p>
          This is <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button className="btn-primary" onClick={() => setIsOpenModal(true)}>
        Confirm Order
      </button>
    </>
  );
}
