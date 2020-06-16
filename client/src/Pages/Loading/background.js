import React from "react"
import styled from 'styled-components';
import img from './site_plural_page001_fundo.png';
import imgMobile from './app_plural_page001_II_fundo.png';
import useHeight from 'Hooks/useWindowHeight';
import useWidth from 'Hooks/useWidth';


const Background = styled.div`
    height: ${(props) => props.height}px;
    background-color: black;
    object-fit: cover;
    margin: 0 auto;
    background-image: url(${img});
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

    @media(max-width:760px){
        background-image: url(${imgMobile});

    }


`;


function Backg(props){
    const pageWidth = useWidth();
    const pageHeight = useHeight();

    return(
        <Background height={pageHeight} width={pageWidth}>
            {props.children}
        </Background>
    )
}

export default Backg;