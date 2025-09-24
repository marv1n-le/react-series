export default function Fruit({name, price, emoji, soldout}) {
  return (
    <li>
        {emoji} {name} {price} {soldout ? "SOLD OUT" : "AVAILABLE"}
    </li>
  );
}
