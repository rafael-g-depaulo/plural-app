import React from "react"
import styled from 'styled-components';
import img from './plural_logo.png'

const PluralLogo = styled.img`
    width: 245px;
    height: 76px;
`;

function Logo(){
    return(
        <PluralLogo src={img} />
    )
}

export default Logo;