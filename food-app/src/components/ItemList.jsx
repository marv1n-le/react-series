import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        food.extendedIngredients.map((item) => (
         <Item item={item} />
        ))
      )}
    </div>
  );
}
