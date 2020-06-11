import React from 'react'
import styled from 'styled-components'
import { labelFontSize } from 'Themes/default'

const MyLabel = styled.label`
  font-family: "Town Text";
  font-size: ${labelFontSize}px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;

  margin-left: 13px;
  margin-bottom: 10px;
`

export const Label = ({
  ...props
}) => {
  return (
    <MyLabel
      {...props}
    />
  )
}

export default Label
