import React from 'react'
import Background from './Components/background'
import styled from 'styled-components';
import PluralLogo from './../../Components/PluralLogo'
import TextBox from './Components/textbox'
import Title from './Components/title'
import TextField from './Components/text'


const GridLateral = styled.div`
    width: 100%;
    min-height: 800px;
    margin: 0 auto;

`
const Grid = styled.div`
    width: 100%;
    min-height: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media(max-width:780px){
        justify-content:left;

    }
`

const StyleLogo = styled(PluralLogo)`

    @media(min-width: 2500px){
        width:30%;
        height:auto;
    }
    @media(min-width: 760px) and (max-width:1040px){
        width:60%;
        height:auto;
    }
`

const LogoDiv = styled.div`
    margin-top:107px;
    width: 100%;
    display: flex;
    justify-content:center;

    @media(max-width:780px){
        justify-content:left;

    }

    @media(max-width:760px) {
        margin-top:40%;
    }

`



export const Confirmation = ({
    ...props
  }) => {
    return (
      <Background>
          <GridLateral/>
          <Grid>
              <LogoDiv>
                <StyleLogo/>
                </LogoDiv>
                <TextBox>
                    <Title>OI, MONA</Title><br />
                    <TextField>CONFIRME SEU EMAIL <br />PRA FINALIZAR A CRIAÇÃO <br />DO SEU CADASTRO</TextField>                 

                </TextBox>
              </Grid>
          <GridLateral/>

          </Background>
    )
  }
export default Confirmation