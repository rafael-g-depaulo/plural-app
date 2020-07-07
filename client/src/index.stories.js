import React from 'react'
import { storiesOf } from '@storybook/react'
import Loading from 'Pages/Loading/index'
import Confirmation from 'Pages/emailConfirmation/index'


storiesOf("Loading", module)
  .add("default", () => <Loading />)

storiesOf("Email", module)
  .add("default", () => <Confirmation />)
