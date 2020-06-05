
import { addDecorator } from '@storybook/react'
import React from 'react'

import GlobalStyles from 'GlobalStyles'

const withGlobalStyles = (storyFn) => {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  )
}

addDecorator(withGlobalStyles)