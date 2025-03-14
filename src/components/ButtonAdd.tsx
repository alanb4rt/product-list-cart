import IconAddToCart from "../assets/images/icon-add-to-cart.svg";

interface ButtonAddProps {
  incrementItemInCart: () => void;
}

export default function ButtonAdd({ incrementItemInCart }: ButtonAddProps) {
  return (
    <button className="card-button" onClick={incrementItemInCart}>
      <img src={IconAddToCart} alt="Icon cart" />
      <span className="truncate">Add to Cart</span>
    </button>
  );
}
