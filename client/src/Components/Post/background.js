import React from "react"
import styled from 'styled-components';
import img from './appcadastro_fundo.png';
import imgMobile from './appcadastro_fundo.png';
import useHeight from 'Hooks/useWindowHeight';
import useWidth from 'Hooks/useWidth';


const Background = styled.div`
    height: auto;
    background-color: black;
    object-fit: cover;
    margin: 0 auto;
    background-image: url(${img});
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


    @media(max-width:760px){
        background-image: url(${imgMobile});

    }

`;


function Back(props){
    const pageWidth = useWidth();
    const pageHeight = useHeight();

    return(
        <Background height={pageHeight} width={pageWidth}>
            {props.children}
        </Background>
    )
}

export default Back;