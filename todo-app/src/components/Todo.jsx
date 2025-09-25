import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");

  return <div>
    <form>
      <input value={todo} type="text" 
      onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  </div>;
}