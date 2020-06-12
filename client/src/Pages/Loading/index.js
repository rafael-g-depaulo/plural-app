import React from "react"
import styled from 'styled-components';
import img from './site_plural_page001_fundo.png'
import Mask from './Components/mask';
import PluralLogo from '../../Components/Logo';
import Backg from './Components/background.js';

const LogoDiv = styled.div`
    position: relative;
    top: 600px;
    left: 43%;
    width: auto;
    height: auto;
    
        /* @media (min-height: 600px) {
            top: 80%;
            width: auto;
        } */
        /* @media(min-width: 1400px){
            left: 40%;
        } */
        /*Considero Mobile a partir de tablet 768*/
        @media(min-width:300px)and (max-width:767px){
            top: 50%;   
            left: 25%;
        }

        @media(min-width:767px)and (max-width:1020px){
           top: 70%;  
            left: 25%;
        }

        /* @media(min-width:390px) and (max-width:768px){
            top: 65%;   
            left: 30%;
        } */

        /* @media(min-width:1020px) and (max-height:1400px){
            top:597px;
            left:40%;
        } */
        @media(min-width:2500px) and (max-height:1400px){
            top:95%;
            left:40%;
        }
`;

const StyleLogo = styled(PluralLogo)`
    width: 20%;
    height:auto;

    @media(min-width:1400px){
        width:25%;
        height: auto;
    }
    /*Considero Mobile a partir de tablet 768*/
        @media(max-width:770px){
                width:60%;
                height: auto;
        }



`;



function Loading(){
    return( 
        
        <Backg>
            <Mask>
            <LogoDiv>
                <StyleLogo/>
            </LogoDiv>
            </Mask>
           
        </Backg>
    )
}

export default Loading;