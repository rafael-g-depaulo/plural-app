import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserProvider } from "./Context/User/Provider";

import GlobalStyles from 'GlobalStyles'
import Fonts from 'Fonts'
import Routes from 'Routes'

const App = () => {
  return (
    <>
      <Fonts />
      <GlobalStyles />
      <Routes />
    </>
  )
}

export default App
