import React from 'react'
import styled from 'styled-components'

import WhiteLogo from './white.png'

const Logo = styled.img`
  object-fit: contain;
  object-position: center;
  width: ${props => props.width ?? "200px"};
  height: ${props => props.height ?? "70px"};
`
export const PluralLogo = ({
  ...props
}) => {
  return (
    <Logo 
      src={WhiteLogo}
      {...props}
    />
  )
}

export default PluralLogo
