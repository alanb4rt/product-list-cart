import IconAddToCart from "../assets/images/icon-add-to-cart.svg";

export default function ButtonAdd({ addOneItemToCart }) {
  return (
    <>
      <button className="card-button" onClick={addOneItemToCart}>
        <img src={IconAddToCart} alt="Icon cart" />
        <p className="truncate">Add to Cart</p>
      </button>
    </>
  );
}
