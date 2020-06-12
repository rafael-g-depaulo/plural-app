import React from 'react';
import styled from 'styled-components';
import img from './confirmar_background.png';

const Back = styled.div`
    display:inline-grid;
    grid-template-columns: 20% 60% 20%;
    width: 100%;
    min-height: 800px;
    height:auto;
    margin: 0 auto;
    background-image: url(${img});
    background-size:cover;
`

export const Background = ({
    ...props
  }) => {
    return (
        <Back>
            {props.children}

        </Back>
    )
  }

export default Background