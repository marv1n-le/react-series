import { createContext, useState } from "react";

const userContext = createContext();
function UserProvider({ children}) {
  const [user, setUser] = useState("guest");
  return (
  <userContext.Provider value={{ user, setUser}}>
    { children}
  </userContext.Provider>
  );
}

export { UserProvider, userContext };