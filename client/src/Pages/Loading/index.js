import React from "react"
import styled from 'styled-components';
import img from './site_plural_page001_fundo.png'
import Mask from './Components/mask';
import Logo from '../../Components/Logo';
import useWidth from 'Hooks/useWidth';
import useHeight from 'Hooks/useWindowHeight';
import Backg from './Components/background.js';






const Back = styled.div`    
    height: ${(props) => props.height};
    background-color: black;
    object-fit: cover;
    margin: 0 auto;
    background-image: url(${img});
    overflow: hidden;


`;

const PluralLogo = styled.div`
    position: relative;
    top: 600px;
    left: 43%;
    width: auto;
    height: auto;
    
        /* @media (min-height: 600px) {
            top: 80%;
            width: auto;
        } */
        @media(min-width: 1400px){
            left: 40%;
        }
        /*Considero Mobile a partir de tablet 768*/
        @media(max-width:380px)and (max-width:767px){
            top: 50%;   
            left: 25%;
        }

        @media(min-width:390px) and (max-width:768px){
            top: 65%;   
            left: 30%;
        }

        @media(min-width:1020px) and (max-height:1400px){
            top:597px;
            left:40%;
        }
        @media(min-width:2500px) and (max-height:1400px){
            top:95%;
            left:40%;
        }
`;

const StyleLogo = styled(Logo)`

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
    const pageWidth = useWidth();
    const pageHeight = useHeight();
    console.log(pageHeight);
    return( 
        
        <Backg>
            <Mask>
            <PluralLogo>
                <StyleLogo/>
            </PluralLogo>
            </Mask>
           
        </Backg>
    )
}

export default Loading;