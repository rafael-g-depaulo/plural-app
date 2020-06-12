import React from "react"
import styled from 'styled-components';
import img from './plural_logo.png'

const PluralLogo = styled.img`
    width: 245px;
    height: 76px;

`;

function Logo(props){
    return(
        <PluralLogo className={props.className} src={img} />
    )
}

export default Logo;