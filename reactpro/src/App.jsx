import { useState } from "react";
import Hello from "./components/Hello";
function App() {
  return (
    <div className="App">
      <Hello name="Lee" message="wow, it works!" emoji="🚀" />
    </div>
  );
}

export default App;
