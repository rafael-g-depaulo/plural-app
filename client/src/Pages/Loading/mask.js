import React from "react"
import styled from 'styled-components';
import img from './mask.png'

const Mascarade = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
    margin: 0 auto;
    object-fit: contain;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 95%;

    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 40% 40% 20%;
    grid-template-areas: 
        ". . ."
        ". . ."
        ". logo ."
    ;

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
    @media(min-width:781px) and (max-width:810px){
        grid-template-rows: 60% 15% 25%;
    }
        

    @media(min-width:812px)and (max-width:1020px){
        grid-template-rows: 20% 25% 55%;
    }

    @media (min-width:1022px) and (max-width:1260px){
        grid-template-rows: 5% 10% 85%;
    }

    @media (min-width:1680px) {
        background-size: 55%;
        background-position: 45% 0%;
        grid-template-rows: 45% 20% 35%;
    }

`;


function Mask(props){

    return(
        <Mascarade>
            {props.children}
        </Mascarade>
    )
}

export default Mask;