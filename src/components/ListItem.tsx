import data from "../data/data.json";
import Item from "./Item";

export default function ListItem() {
  return (
    <div>
      <h1>Desserts</h1>
      <div className="list">
        {data.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
