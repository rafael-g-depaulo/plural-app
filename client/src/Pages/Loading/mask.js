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
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 40% 40% 20%;
    display: inline-grid;

    @media(max-width:680px){
        background-size:200%;
        grid-template-rows: 10% 0% 90%;
        background-position: 54% 0%;
    }

    @media(min-width:681px) and (max-width:780px){
        background-size:200%;
        grid-template-rows: 70% 15% 15%;
        background-position: 54% 0%;

    }
    @media(min-width:781px) and (max-height:810px){
        grid-template-rows: 60% 15% 25%;
    }
        

    @media(min-width:812px)and(max-width:1020px){
        grid-template-rows: 20% 25% 55%;
    }

    @media(min-width:1024px)and(max-width:1300px){
        grid-template-rows: 40% 10% 50%;
    }

    @media (min-width:1680px) {
        background-size: 55%;
        grid-template-rows: 45% 20% 35%;
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