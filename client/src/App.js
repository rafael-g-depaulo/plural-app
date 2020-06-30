import React from 'react'

import { UserProvider } from "Context/User/Provider"
import GlobalStyles from 'GlobalStyles'
import Fonts from 'Fonts'
import Routes from 'Routes'

const App = () => { 
  console.log("aaaaa. teste teste")
  console.log(process.env.REACT_APP_STRAPI_URL)
  return (
    <>
      <Fonts />
      <GlobalStyles />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  )
}

export default App
