import React from "react"
import styled from 'styled-components';
import img from './mask.png'

const Mascarade = styled.div`
    width: 1280px;
    height: 800px;
    background-image: url(${img});
    background-repeat: no-repeat;
    margin: 0 auto;
    object-fit: contain;

`;

function Mask(){

    return(
        <Mascarade />
    )
}

export default Mask;