import React from "react";
import styled from 'styled-components';
import { parseISO} from 'date-fns';
import format from 'date-fns/format';
import {pt} from 'date-fns/esm/locale'


const TextContainer = styled.p`
    grid-area: data;
    font-family: "Town Text";
    font-weight: 700;
    font-size: 1em;
    color: #ebce8b;

  @media(min-width: 1400px){
    font-size:1.5em;
  }
  @media(min-width: 1800px){
    font-size: 2.5em;
    font-weight: 500;
  }

`;
export const Date = ({
    ...props
  }) => {
      let variable = props.datatime
      let stri = "" + variable
      let data= stri.toString().substring(0,10)
      let time= stri.toString().substring(11,19)
    //   let strdata = dataTimeStr.toString();
      let criado = parseISO(data+" "+time)
     

        const formattedDate = format(
            criado, 
            "dd 'de' MMMM'- ' HH:mm'hs'",
            {locale: pt}
          );
      
    
       

  

    return (
      <TextContainer
      
        {...props}
      ><p style={{marginTop:0}}>Evento online</p>
      {formattedDate}
          </TextContainer>
    )
  }


export default Date;
