import React from "react"
import styled from 'styled-components';
import Mask from './mask';
import PluralLogo from '../../Components/Logo';
import Backg from './background';

const LogoDiv = styled.div`
    position: relative;
    top: 580px;
    left: 43%;
    width: auto;
    height: auto;

        /*Considero Mobile a partir de tablet 768*/
        @media(min-width:300px)and (max-width:767px){
            top: 50%;   
            left: 25%;
        }

        @media(min-width:767px)and (max-width:1020px){
           top: 70%;  
            left: 25%;
        }
        @media(min-width:2500px) and (max-height:1400px){
            top:75%;
            left:40%;
        }

        @media(min-width:1023px) and (max-height:590px){
            top:75%;
 
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