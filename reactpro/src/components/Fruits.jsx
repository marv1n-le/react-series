import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const fruits = [
    {
      name: "Apple",
      price: 1.2,
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: 12,
      emoji: "🥭",
    },
    {
      name: "Banana",
      price: 2.5,
      emoji: "🍌",
    },
    {
      name: "Orange",
      price: 3.5,
      emoji: "🍊",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={fruit.name}> {" "} {fruit.name} {fruit.price} {fruit.emoji}</li>
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
        ))}
      </ul>
    </div>
  );
}
