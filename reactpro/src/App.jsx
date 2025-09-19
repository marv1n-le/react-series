import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Fruit from "./components/Fruit";
import Message from "./components/Message";

function App() {
  const person = {
    name: "Marvin",
    message: "wow, it works!",
    emoji: "🚀",
    seatNumbers: [1, 2, 3, 4],
  }
  return (
    <div className="App">
      <Message
      />
    </div>
  );
}

export default App;
