import React from 'react';
import styled from 'styled-components';
import img from './confirmar_background.png';
import useHeight from './../../../Hooks/useWindowHeight';

const Back = styled.div`
    display:inline-grid;
    grid-template-columns: 20% 60% 20%;
    width: 100%;
    min-height: 800px;
    height:${props => props.height};
    margin: 0 auto;
    background-image: url(${img});
    background-size:cover;
`

export const Background = ({
    ...props
  }) => {
      const altura = useHeight;
    return (
        <Back {height: useHeight}>
            {props.children}

        </Back>
    )
  }

export default Background