
import React from 'react'
import styled from 'styled-components'


const Text = styled.p`
  font-weight: ${props => props.weight ?? "400"};
  font-size: ${props => props.size ?? "1em"};

  margin-bottom: 20px;
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