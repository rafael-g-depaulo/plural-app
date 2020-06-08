import React from "react"
import styled from 'styled-components';
import img from './site_plural_page001_fundo.png'
import Mask from './Components/mask';
import Logo from '../../Components/Logo';


const Back = styled.div`
    width: 1280px;
    height: 800px;
    background-color: black;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-image: url(${img});

`;

const PluralLogo = styled.div`
    position: absolute;
    top: 95%;
    left: 47%;
`;



function Loading(){
    return( 
        <Back>
            <Mask />
            <PluralLogo>
            <Logo />
            </PluralLogo>
        </Back>
    )
}

export default Loading;