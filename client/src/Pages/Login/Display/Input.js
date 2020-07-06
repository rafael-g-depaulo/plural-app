import React from 'react'
import styled from 'styled-components'
import { inputFontSize } from 'Themes/default'

const MyInput = styled.input`
  border: solid 2px #fffdfd;
  font-family: "Town Text";
  background-color: #000;
  color: white;
  border-radius: 15px;
  height: 30px;

  padding-left: 10px;
  font-size: ${inputFontSize}px;

  &:hover {
    background-color: #111111;
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

export const Input = ({
  ...props
}) => {
  return (
    <MyInput
      {...props}
    />
  )
}

export default Input
