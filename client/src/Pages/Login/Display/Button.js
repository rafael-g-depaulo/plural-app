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
  
  &:hover {
    background-color: #111111;
    cursor: pointer;
  }
  &:active {
    background-color: #222222;
  }
  &:focus {
    outline: none;
    border: solid 3px #fffdfd;
    background-color: #0f0f0f;
  }
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
