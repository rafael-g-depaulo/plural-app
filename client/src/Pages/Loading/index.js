import React from "react"
import styled from 'styled-components';
import Mask from './mask';
import PluralLogo from 'Components/Logo';
import Backg from './background';

const LogoDiv = styled.div`
    grid-area: logo;
    display: flex;
    justify-content:center;
    height:100%;
    width: 100%;

`;

const StyleLogo = styled(PluralLogo)`
    width: 20%;
    height:auto;

    @media(max-width:1140px){
        width:30%;
    }
    @media(max-width:1400px){
        width:25%;

    }

    @media(min-width:1400px){
        width:25%;
        height: auto;
    }
    @media (min-width:2500px) {
        width: 15%;
    }

    /*Considero Mobile a partir de tablet 768*/
        @media(max-width:768px){
                width:60%;
                height: auto;
                margin-left:0;
        }

        @media(min-width:769px) and (max-width:1020px){
                width:50%;
                height: auto;
                margin-left:0;
        }

        @media(min-width:1021px) and (max-width:1300px){
                width:35%;
                height: auto;
                margin-left:0;
        }


`;

function Loading() {
  return (
    <Backg>
      <Mask>
        <LogoDiv>
          <StyleLogo />
        </LogoDiv>
      </Mask>
    </Backg>
  )
}

export default Loading;