import IconDecrement from "../assets/images/icon-decrement-quantity.svg";
import IconIncrement from "../assets/images/icon-increment-quantity.svg";

export default function ButtonAddActive({
  item,
  addOneItemToCart,
  removeOneItemToCart,
  cartItems,
}) {
  const itemCount = () =>
    cartItems.find((cartItem) => cartItem.name === item.name).count;

  return (
    <>
      <button className="card-button-active">
        <img
          src={IconDecrement}
          alt="Icon less"
          onClick={removeOneItemToCart}
        />
        {itemCount()}
        <img src={IconIncrement} alt="Icon plus" onClick={addOneItemToCart} />
      </button>
    </>
  );
}
