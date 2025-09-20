import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const person = {
    name: "Marvin",
    message: "wow, it works!",
    emoji: "🚀",
    seatNumbers: [1, 2, 3, 4],
  }
  return (
    <div className="App">
      <Counter
      />
    </div>
  );
}

export default App;
