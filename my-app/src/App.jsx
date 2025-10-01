import { createContext, useReducer } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./Nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import Checkout from "./Checkout";
import Login from "./Login";
import { UserProvider } from "./context/UserContext";
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

// function App() {
//   return <BrowserRouter>
//   <Nav />
//   <Routes>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products/:id" element={<Products />} />
//     <Route path="/dashboard" element={<Dashboard />}>
//       <Route path="profile" element={<Profile />} />
//       <Route path="settings" element={<Settings />} />
//     </Route>
//     <Route path="*" element={<PageNotFound />} />
//   </Routes>
//   </BrowserRouter>
// }

// export default App;

function App() {
  return (
    <div>
      <UserProvider>
        <Checkout />
        <Login />
      </UserProvider>
    </div>
  );
}

export default App;
