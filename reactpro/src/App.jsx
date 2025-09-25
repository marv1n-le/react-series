import { useState } from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const person = {
    name: "Marvin",
    message: "wow, it works!",
    emoji: "🚀",
    seatNumbers: [1, 2, 3, 4],
  }
  return (
    <div className="App">
      <Form
      />
    </div>
  );
}

export default App;
