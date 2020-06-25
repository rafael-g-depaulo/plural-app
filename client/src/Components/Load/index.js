import React from 'react'
import styled from 'styled-components';
import KeyExample from './KeyExample';

const Dota = styled.div`
    width: 10px;
    height: 10px;
    background: #f26522;
    border-radius: 50%;
    margin-left:10px;
    animation-name: ${KeyExample};
    animation-duration: 1.2s; 
    animation-timing-function: linear; 
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-play-state: running; 
`;

const Dotb = styled.div`
    width: 10px;
    height: 10px;
    background: #f26522;
    border-radius: 50%;
    margin-left:15px;
    animation-name: ${KeyExample};
    animation-duration: 1.2s; 
    animation-timing-function: linear; 
    animation-delay: 0.2s;
    animation-iteration-count: infinite;
    animation-play-state: running; 
`;
const Dotc = styled.div`
    width: 10px;
    height: 10px;
    background: #f26522;
    border-radius: 50%;
    margin-left:15px;
    animation-name: ${KeyExample};
    animation-duration: 1.2s; 
    animation-timing-function: linear; 
    animation-delay: 0.4s;
    animation-iteration-count: infinite;
    animation-play-state: running; 
`;

const Container = styled.div`
    margin-top:20vh;
    grid-area: nav;
    display: inline-grid;
    height:100%;
    width: 100%;
    /* background: black; */
    justify-content: center;
`;

const DotContainer = styled.div`
    display: flex;
    height:100%;
    width: 100%;
`;


export const LoadDots = ({
    ...props
  }) => {
    return (
        <Container>
            <DotContainer>
        <Dota/>
        <Dotb/>
        <Dotc/>
        </DotContainer>
        </Container>

    )
  }

  export default LoadDots
  