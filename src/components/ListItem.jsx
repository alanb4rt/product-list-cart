import data from "../data/data.json";
import { formatPrice } from "../utils/formatPrice";

export function Item({ item }) {
  const { image, name, category, price } = item;
  const { thumbnail, mobile, tablet, desktop } = image;

  const cleanImageUrl = (image) => {
    return image.replace("./", "./src/");
  };
  return (
    <>
      <div className="card">
        <picture>
          <source media="(width < 640px)" srcSet={cleanImageUrl(mobile)} />
          <source media="(width < 768px)" srcSet={cleanImageUrl(tablet)} />
          <img
            className="rounded-2xl"
            src={cleanImageUrl(desktop)}
            alt={`Image ${name}`}
          />
        </picture>
        <div className="card-button">
          <img src="./src/assets/images/icon-add-to-cart.svg" alt="Icon cart" />
          <button>Add to Cart</button>
        </div>
        <div className="card-description">
          <p className="">{category}</p>
          <p className="font-bold">{name}</p>
          <p className="text-rose-700 font-semibold">${formatPrice(price)}</p>
        </div>
      </div>
    </>
  );
}

export default function ListItem() {
  return (
    <>
      <div>
        <h1>Desserts</h1>
        <div className="list">
          {data.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
