import { useReducer } from "react";
import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
//   function reducer(state, action) {
//     if (action.type === "increment") {
//       return {
//         ...state,
//         count: state.count + state.incrementBy,
//       };
//       //state + action.payload;
//     } else if (action.type === "decrement") {
//       return {
//         ...state,
//         count: state.count - state.incrementBy,
//       };
//       //state - action.payload
//     }

//     if (action.type === "setIncrement") {
//       return {
//         ...state,
//         incrementBy: action.payload
//       }
//     }
//   }
//   return (
//     <div>
//       Use Reducer: {state.count}
//       <input
//         type="text"
//         value={state.incrementBy}
//         onChange={(e) => dispatch({
//           type: "setIncrement",
//           payload: Number(e.target.value)
//         })}
//       />
//       <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
//         Increment count
//       </button>
//       <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
//         Decrement count
//       </button>
//     </div>
//   );
// }

function App() {
  function reducer(state, action) {
    if (action.type === "add") {
      return {
        ...state,
        balance: state.balance + action.payload
      }
    }
    if (action.type === "sub") {
      return {
        ...state,
        balance: state.balance - action.payload
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    balance: 0,
  })
  const [amount, setAmount] = useState(0);

  return <div>
    {state.balance}
    <input type="text" 
    onChange={(e) => setAmount(Number(e.target.value))}
    />
    <button onClick={() =>
      dispatch({ type: "add", payload: Number(amount)})
    }>Deposit</button>
    <button onClick={() => 
      dispatch({ type: "sub", payload: Number(amount) })
    }>Widthdraw</button>
  </div>
}

export default App;
