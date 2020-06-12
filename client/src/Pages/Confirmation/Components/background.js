import React from 'react';
import styled from 'styled-components';
import img from './confirmar_background.png';
import useHeight from 'Hooks/useWindowHeight';

const Back = styled.div`
    display:inline-grid;
    grid-template-columns: 20% 60% 20%;
    width: 100%;
    height:${props => props.height}px;
    min-height: 800px;
    margin: 0 auto;
    background-image: url(${img});
    background-size:cover;
`

export const Background = ({
    ...props
  }) => {
      const altura = useHeight;
      console.log(altura + "px");
    return (
        <Back height={altura}>
            {props.children}

        </Back>
    )
  }

export default Background