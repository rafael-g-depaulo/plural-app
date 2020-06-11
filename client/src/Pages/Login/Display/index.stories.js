import React from 'react'
import { storiesOf } from '@storybook/react'

import styled from 'styled-components'
import Display from '.'

const Desktop = styled.div`
  height: 800px;
  width: 1280px;
`
const Mobile = styled.div`
  height: 667px;
  width: 375px;
`

storiesOf("Login Page", module)
  .add("Desktop", () => <Desktop><Display /></Desktop>)
  .add("Mobile", () => <Mobile><Display /></Mobile>)
