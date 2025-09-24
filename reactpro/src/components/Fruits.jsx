import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const fruits = [
    {
      name: "Apple",
      price: 1.2,
      emoji: "🍎",
      soldout: false,
    },
    {
      name: "Mango",
      price: 12,
      emoji: "🥭",
      soldout: false,
    },
    {
      name: "Banana",
      price: 2.5,
      emoji: "🍌",
      soldout: false,
    },
    {
      name: "Orange",
      price: 3.5,
      emoji: "🍊",
      soldout: true,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={fruit.name}> {" "} {fruit.name} {fruit.price} {fruit.emoji}</li>
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout={fruit.soldout}/>
        ))}
      </ul>
    </div>
  );
}
