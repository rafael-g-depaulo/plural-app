import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const SocialButton = styled(Button)`
  width: 100%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.hcolor};
  }
  &:active {
    background-color: ${props => props.acolor};
  }
`

const Link = styled.a`
  width: 48%;
  text-decoration: none;
  &:hover, &:active {
    text-decoration: none;
  }
`

const SocialLink = ({
  href,
  children,
  color,
  acolor,
  hcolor,
  ...props
}) => (
  <Link href={`${process.env.REACT_APP_SERVER_URL}${href}`} target="_blanc" rel="noopener" {...props} >
    <SocialButton color={color} acolor={acolor} hcolor={hcolor}>
      {/* <Box>{ children}</Box> */}
      { children }
    </SocialButton>
  </Link>
)

export default SocialLink
