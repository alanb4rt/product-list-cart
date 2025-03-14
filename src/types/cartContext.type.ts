import { Dispatch, SetStateAction } from "react";
import { ItemsType } from "./items.type";

export interface CartContextType {
  cartItems: ItemsType[];
  setCartItems: Dispatch<SetStateAction<ItemsType[]>>;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}
