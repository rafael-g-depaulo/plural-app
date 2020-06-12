import React from "react"
import styled from 'styled-components';
import img from './mask.png'

const Mascarade = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
    margin: 0 auto;
    object-fit: contain;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100%;

    @media(max-width: 780px){
        background-size: 200%;

    }
    @media(max-width:1300px){
        /* background-size: 200%; */
        background-position: top center;
    }



`;
// const Mascarade = styled.img`
//     position: relative;
//     width:100%;
//     right: 0;

//     @media (max-width: 1300px){
//         width: 200%;
//         right: 50%;
//     }

// `;

function Mask(props){

    return(
        <Mascarade>
            {props.children}
            </Mascarade>
    )
}

export default Mask;