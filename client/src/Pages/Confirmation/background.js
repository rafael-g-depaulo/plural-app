import React from 'react';
import styled from 'styled-components';
import img from './confirmar_background.png';
import img2 from './confirmar_app.png';
import useHeight from 'Hooks/useWindowHeight';

const Back = styled.div`
    display:inline-grid;
    grid-template-columns: 20% 60% 20%;
    width: 100%;
    height:${props => props.height}px;
    min-height: ${props => props.height}px;
    margin: 0 auto;
    background-image: url(${img});
    background-size:cover;


    @media(max-width:780px){
        background-image: url(${img2});
        grid-template-columns: 16% 64% 20%;

            
        }

`

export const Background = ({
    ...props
  }) => {
      const altura = useHeight();
      console.log(altura + "px");
    return (
        <Back height={altura}>
            {props.children}

        </Back>
    )
  }

export default Background