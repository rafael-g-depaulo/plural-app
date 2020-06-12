
import React from 'react'
import styled from 'styled-components'


const Text = styled.text`
  font-weight: ${props => props.weight ?? "400"};
  font-size: ${props => props.size ?? "33px"};


`
export const TextField = ({
  ...props
}) => {
  return (
    <Text {...props}>
    {props.children}
    </Text>
  )
}

export default TextField