import { Dispatch, SetStateAction } from "react";
import { ItemsType } from "../types/items.type";

export const removeItemToCart = (
  name: string,
  cartItems: ItemsType[],
  setCartItems: Dispatch<SetStateAction<ItemsType[]>>
) => {
  const removeItem = cartItems.filter((item) => item.name !== name);
  setCartItems(removeItem);
};
