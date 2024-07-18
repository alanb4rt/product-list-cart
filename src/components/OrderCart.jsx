import { useContext } from "react";
import iconRemoveItem from "../assets/images/icon-remove-item.svg";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import { formatPrice } from "../utils/formatPrice";
import { CartContext } from "../App";

export function CartItem({ item, onClick }) {
  const { image, name, category, price } = item;
  return (
    <>
      <li className="flex justify-between items-center py-4 border-b">
        <div className="flex flex-col">
          <p className="font-bold mb-2">{name}</p>
          <div className="flex gap-2 text-primary">
            <p className="font-bold mr-2">2x</p>
            <p className="text-rose-400">@ ${formatPrice(price)}</p>
            <p className="text-rose-400 font-semibold">
              ${formatPrice(price * 2)}
            </p>
          </div>
        </div>
        <div>
          <img
            className="cursor-pointer"
            src={iconRemoveItem}
            alt="Delete"
            title="Delete"
            onClick={onClick}
          />
        </div>
      </li>
    </>
  );
}

export default function OrderCart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeItemToCart = (id) => {
    const removeItem = cartItems.filter((item) => item.id !== id);
    setCartItems(removeItem);
  };
  return (
    <>
      <ul>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            onClick={() => removeItemToCart(item.id)}
          />
        ))}
      </ul>
      <div className="flex justify-between items-center gap-4 py-8">
        <p>Order Total</p>
        <p className="text-4xl font-bold">$32.00</p>
      </div>
      <div className="flex justify-center items-center gap-2 bg-rose-50 p-4 rounded mb-8">
        <img src={iconCarbonNeutral} alt="Icon Carbon Neutral" />
        <p>
          This is <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button className="bg-primary text-white rounded-full w-full p-4">
        Confirm Order
      </button>
    </>
  );
}
