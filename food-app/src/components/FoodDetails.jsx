import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "cdef266fa396475a9fa61f5cd8ac0d8b";

  useEffect(() => {
    async function fetchFoodDetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFoodDetails();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt={food.title} />
        <div>
          <span>
            <strong>⏰ {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>🧑🏻‍💻 Serves {food.servings}</strong>
          </span>
          <span>{food.vegeterian ? "🥦 Vegeterian" : "🍖 Non-Vegeterian"}</span>
          <span>{food.vegan ? "🥗 Vegan" : ""}</span>
        </div>
        <span>💵 {food.pricePerServing / 100} Per serving</span>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
