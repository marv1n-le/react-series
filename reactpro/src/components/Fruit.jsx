export default function Fruit({name, price, emoji}) {
  return (
    <div>
      <li key={name}>
        {emoji} {name} - ${price.toFixed(2)}
      </li>
    </div>
  );
}
