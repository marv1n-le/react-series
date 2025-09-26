import { useEffect } from "react";
import { useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "cdef266fa396475a9fa61f5cd8ac0d8b";

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState('pizza');
  //syntax of useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query])
  return <div>
    <input 
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    type="text"/>
  </div>
}