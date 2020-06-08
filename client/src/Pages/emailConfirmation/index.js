import React from "react"
import styled from 'styled-components';
import Logo from '../../Components/Logo';
import img from './site_confirmar_email_fundo.png';


const Back = styled.div`
    width: 1275px;
    height: 800px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-image: url(${img});

`;

const PluralLogo = styled.div`
    position: absolute;
    top: 107px;
    left: 47%;
`;



function Confirmation(){
    return( 
        <Back>
            <PluralLogo>
            <Logo />
            </PluralLogo>
        </Back>
    )
}

export default Confirmation;