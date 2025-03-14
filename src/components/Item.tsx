import { useContext } from "react";
import { CartContext } from "../App";
import ButtonAdd from "./ButtonAdd";
import ButtonAddActive from "./ButtonAddActive";
import { formatPrice } from "../utils/formatPrice";
import { getImageURL } from "../utils/getImageURL";
import { ItemsType } from "../types/items.type";

interface ItemProps {
  item: ItemsType;
}

export default function Item({ item }: ItemProps) {
    const { cartItems, setCartItems } = useContext(CartContext);
  
    const { image, name, category, price }: ItemsType = item;
    const { mobile, tablet, desktop } = image;
  
    const incrementItemInCart = () => {
      const itemInCart = cartItems.find((item) => item.name === name);
      if (itemInCart) {
        setCartItems(
          cartItems.map((item) =>
            item.name === name ? { ...item, count: (item.count ?? 0) + 1 } : item
          )
        );
      } else {
        setCartItems([...cartItems, { count: 1, ...item }]);
      }
    };
  
    const decrementItemInCart = () => {
      const itemInCart = cartItems.find((cartItem) => cartItem.name === name);
      if (itemInCart?.count === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.name !== name));
      } else {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.name === name ? { ...cartItem, count: (cartItem.count ?? 1) - 1 } : cartItem
          )
        );
      }
    };
  
    const checkItemInCart = () => cartItems.some((item) => item.name === name);
    const isCartActive = checkItemInCart() ? "card-active" : "";

    return (
      <div className={`card ${isCartActive}`}>
        <picture>
          <source media="(width < 640px)" srcSet={getImageURL(mobile)} />
          <source media="(width < 768px)" srcSet={getImageURL(tablet)} />
          <img
            className="card-image rounded-2xl"
            src={getImageURL(desktop)}
            alt={`Image ${name}`}
          />
        </picture>
        {checkItemInCart() ? (
          <ButtonAddActive
            item={item}
            incrementItemInCart={incrementItemInCart}
            decrementItemInCart={decrementItemInCart}
            cartItems={cartItems}
          />
        ) : (
          <ButtonAdd incrementItemInCart={incrementItemInCart} />
        )}

        <div className="card-description">
          <p className="">{category}</p>
          <p className="font-bold">{name}</p>
          <p className="text-rose-700 font-semibold">${formatPrice(price)}</p>
        </div>
      </div>
    );
  }