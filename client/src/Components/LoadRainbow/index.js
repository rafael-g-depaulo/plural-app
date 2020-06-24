import React from 'react'
import styled, { keyframes } from 'styled-components';
import KeyRainbow from './KeyRainbow';

const Rainbow = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #ff1a1a; /* Red */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${KeyRainbow} 2s linear infinite;
`;


const Container = styled.div`
    grid-area: nav;
    display: inline-grid;
    height:100%;
    width: 100%;
    /* background: black; */
    justify-content: center;
    margin-top: 20vh;
`;

const DotContainer = styled.div`
    display: flex;
    height:100%;
    width: 100%;
`;


export const LoadRainbow = ({
    ...props
  }) => {
    return (
        <Container>
            <DotContainer>
        <Rainbow/>
        </DotContainer>
        </Container>

    )
  }

  export default LoadRainbow
  