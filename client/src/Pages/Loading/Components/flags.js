import React from "react"
import styled from 'styled-components';
import img from './mask.png'

const FlagRainbow = styled.div`
    width: 276px;
    height: 178px;
    object-fit: contain;
    background-image: url(${img});

`;

function Flags(){

    return(
        <FlagRainbow />
    )
}

export default Flags;