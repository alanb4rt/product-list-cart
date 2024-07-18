import Cart from "./components/Cart";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-[1fr_33%] gap-8">
          <ListItem />
          <Cart />
        </div>
      </main>
    </>
  );
}
