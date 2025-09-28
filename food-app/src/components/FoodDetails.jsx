import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  //const API_KEY = "cdef266fa396475a9fa61f5cd8ac0d8b";
  //const API_KEY = "f06e7d20027e4bfdb0dda69aec14b5f5";
  const API_KEY = "b45596a093b84595a5f6bc4245f374d7";
  //const API_KEY = "f75f50fd50904935a36dc5798d9592a6";

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
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>🧑🏻‍💻 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegeterian ? "🥦 Vegeterian" : "🍖 Non-Vegeterian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🥗 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💵 {food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading}/>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
