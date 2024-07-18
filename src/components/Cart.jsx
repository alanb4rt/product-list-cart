import data from "../data/data.json";
import iconRemoveItem from "../assets/images/icon-remove-item.svg";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";

export function CartItem({ item }) {
  const { image, name, category, price } = item;
  return (
    <>
      <li className="flex justify-between items-center py-4 border-b">
        <div className="flex flex-col">
          <p className="font-bold mb-2">{name}</p>
          <div className="flex gap-2 text-primary">
            <p className="font-bold mr-2">2x</p>
            <p className="text-rose-400">@ ${price}</p>
            <p className="text-rose-400 font-semibold">${price * 2}</p>
          </div>
        </div>
        <div>
          <img src={iconRemoveItem} alt="Delete" />
        </div>
      </li>
    </>
  );
}

export default function Cart() {
  const itemCount = data.length;
  return (
    <>
      <div className="bg-white p-8 h-fit rounded-lg">
        <h2 className="text-primary">Your Cart ({itemCount})</h2>
        <ul>
          {data.map((item, index) => (
            <CartItem key={index} item={item} />
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
      </div>
    </>
  );
}
