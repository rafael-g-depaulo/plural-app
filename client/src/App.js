import React from "react";
import GlobalStyles from "GlobalStyles";
import Fonts from "Fonts";
import Routes from "Routes";

const App = () => {
  return (
    <>
      <Fonts />
      <GlobalStyles />    
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
};

export default App;
