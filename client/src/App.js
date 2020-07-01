import React from 'react'

import { UserProvider } from "Context/User/Provider"
import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'

const App = () => { 
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  )
}

export default App
