import React from 'react'
import { storiesOf } from '@storybook/react'

import styled from 'styled-components'
import Desktop from './Desktop'
import Mobile from './Mobile'

const DesktopDisplay = styled.div`
  height: 800px;
  width: 1280px;
`
const MobileDisplay = styled.div`
  height: 667px;
  width: 375px;
`

storiesOf("Login Page", module)
  .add("Desktop", () => <DesktopDisplay><Desktop /></DesktopDisplay>)
  .add("Mobile", () => <MobileDisplay><Mobile /></MobileDisplay>)
