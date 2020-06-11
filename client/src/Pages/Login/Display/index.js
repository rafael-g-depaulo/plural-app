import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

  height: 100%;

  @media (max-width: 399px) {
    /* styles para mobile */
    background-color: #2f6f7a;
  }
  @media (min-width: 400px) {
    /* styles para desktop */
    background-color: #cf0f1a;
  }
`

const Content = styled.div`
  height: 100%;

  min-width: 300px;
  max-width: min(380px, 80%)
`

export const Display = ({
  ...props
}) => {
  return (
    <Container />
  )
}

export default Display
