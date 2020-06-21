import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "Pages/SignIn";
import { UserProvider } from "./Context/User/Provider";

function App() {
  return (
    <UserProvider>
      <h1>App</h1>
    </UserProvider>
  );
}

export default App;
