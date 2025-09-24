import { useState } from "react";
import Hello from "./components/Hello";
function App() {
  const person = {
    name: "Marvin",
    message: "wow, it works!",
    emoji: "🚀",
    seatNumbers: [1, 2, 3, 4],
  }
  return (
    <div className="App">
      <Hello 
      person = {person}
      />
    </div>
  );
}

export default App;
