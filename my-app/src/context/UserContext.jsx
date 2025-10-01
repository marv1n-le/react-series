import { useReducer } from "react";
import { createContext, useState } from "react";

const userContext = createContext();
function UserProvider({ children}) {

  // const [user, setUser] = useState("guest");
  const [user, dispatch] = useReducer(userReducer, "");
  function userReducer(state, action) {
    if (action.type === "login") {
      return action.payload;
    }
    if (action.type === "logout") {
      return action.payload;
    }
  }
  return (
  <userContext.Provider value={{ user, dispatch}}>
    { children}
  </userContext.Provider>
  );
}

export { UserProvider, userContext };