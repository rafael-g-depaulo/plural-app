import React from 'react'
import styled from 'styled-components'
import { buttonFontSize } from 'Themes/default'

const MyButton = styled.button`
  border: solid 2px #fffdfd;
  font-family: "Town Text";
  background-color: #000;
  color: white;
  border-radius: 15px;
  height: 30px;
  font-size: ${buttonFontSize}px;
  text-align: center;
`

export const Button = ({
  ...props
}) => {
  return (
    <MyButton
      {...props}
    />
  )
}

export default Button
