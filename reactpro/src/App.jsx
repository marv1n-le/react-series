import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const person = {
    name: "Marvin",
    message: "wow, it works!",
    emoji: "🚀",
    seatNumbers: [1, 2, 3, 4],
  }
  return (
    <div className="App">
      <ConditionalComponent
      />
    </div>
  );
}

export default App;
