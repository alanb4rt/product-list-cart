import IconAddToCart from "../assets/images/icon-add-to-cart.svg";

export default function ButtonAdd({ addOneItemToCart }) {
  return (
    <>
      <button className="card-button" onClick={addOneItemToCart}>
        <img src={IconAddToCart} alt="Icon cart" />
        Add to Cart
      </button>
    </>
  );
}
