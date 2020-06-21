import React from "react";
import { UserProvider } from "./Context/User/Provider";

function App() {
  return (
    <UserProvider>
      <h1>App</h1>
    </UserProvider>
  );
}

export default App;
