import React from 'react'
import styled, { css } from 'styled-components';
import PluralLogo from 'Components/Logo';
import Navbar from 'Components/Navbar';


const Logo = styled(PluralLogo)`
  margin-right: 50px;
  margin-top: 40px;
  margin-bottom: 20px;
  height: 65px;
  width: 205px;

  @media (min-width: 700px) {
    margin-right: 130px;
    margin-top: 60px;
    margin-bottom: 30px;
    height: 127px;
    width: 411px;
  }
`;

const Container = styled.div`
  width: 100%;
  /* height: auto; */
  display: flex;
  align-items:center;
  justify-content: flex-start;
`

const Box = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
  ${props => props.grid && css`grid-area: ${props.grid};`}

  @media (max-width: 699px) {
    margin-bottom: ${props => props.mbSmall ?? "30px"};
  }
  @media (min-width: 700px) {
    margin-bottom: ${props => props.mbLarge ?? "50px"};
  }

`

export const Navigation = ({
  ...props
}) => {
  return (<Box {...props}>
    <Logo />
    <Container>
      <Navbar />
    </Container>
  </Box>)
}

export default Navigation
