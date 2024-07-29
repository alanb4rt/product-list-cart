import iconRemoveItem from "../assets/images/icon-remove-item.svg";
import { changeImageURL } from "../utils/changeImageURL";
import { formatPrice } from "../utils/formatPrice";

export default function CartItem({ item, onClick, confirmOrder }) {
  const { image, name, price, count = 1 } = item;
  const { thumbnail } = image;
  return (
    <>
      <li className="flex items-center justify-between gap-4 py-4 border-b">
        <div className="flex gap-4 items-center">
          {confirmOrder && (
            <img
              className="size-12 object-cover"
              src={changeImageURL(thumbnail)}
              alt={`Image of ${name}`}
            />
          )}
          <div className="flex flex-col">
            <p className="line-clamp-2 font-bold mb-2">{name}</p>
            <div className="flex flex-wrap gap-2 text-primary">
              <p className="font-bold mr-2">{count}x</p>
              <p className="text-rose-400">@ ${formatPrice(price)}</p>
              {!confirmOrder && (
                <p className="text-rose-400 font-semibold">
                  ${formatPrice(price * count)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          {!confirmOrder ? (
            <img
              className="cursor-pointer min-w-5 min-h-5 aspect-square border border-rose-300 rounded-full p-1"
              src={iconRemoveItem}
              alt="Delete"
              title="Delete"
              onClick={onClick}
            />
          ) : (
            <p className="font-semibold">${formatPrice(price * count)}</p>
          )}
        </div>
      </li>
    </>
  );
}
