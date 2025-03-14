import { ItemsType } from "../types/items.type";
import IconDecrement from "./icons/IconDecrement";
import IconIncrement from "./icons/IconIncrement";

interface ButtonAddActiveProps {
  item: ItemsType;
  incrementItemInCart: () => void;
  decrementItemInCart: () => void;
  cartItems?: ItemsType[];
}

export default function ButtonAddActive({
  item,
  incrementItemInCart,
  decrementItemInCart,
  cartItems,
}: ButtonAddActiveProps) {
  const itemCount = () => cartItems?.find((cartItem) => cartItem.name === item.name)?.count ?? 0;

  return (
    <button className="card-button-active">
      <IconDecrement onClick={decrementItemInCart} />
      {itemCount()}
      <IconIncrement onClick={incrementItemInCart} />
    </button>
  );
}
