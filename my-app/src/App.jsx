import { useReducer } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type === "increment") {
      return state + action.payload;
    } else if (action.type === "decrement") {
      return state - action.payload
    }
  }
  return (
    <div>
      Use State: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      Use Reducer: {state}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment count
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement count</button>
    </div>
  );
}

export default App;
