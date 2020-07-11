import React from 'react'
import Background from './background'
import styled from 'styled-components';
import PluralLogo from 'Components/PluralLogo'
import TextBox from './textbox'
import TextField from './text'
import { useContext } from 'react';
import UserContext from 'Context/User';
import { resendConfirmation } from 'Api/User';

const MainDiv = styled.div`
    height:100vh;
    overflow-y:hidden;


`
const GridLateral = styled.div`
    width: 100%;
    height:100%;
    margin: 0;

`
const Grid = styled.div`
    width: 100%;
    height:100%;
    margin: 0;
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

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5rem;
  font-family: Town Text;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0);

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 599px) {
    border: 1px #fffdfd solid;
    font-size: 16px;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    border: 2px #fffdfd solid;
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    border: 2px #fffdfd solid;
    font-size: 20px;
  }
`;




export const Confirmation = ({
    ...props
}) => {
    const { currentUser } = useContext(UserContext)
    const firstName = currentUser?.name ?? "usuário"
    const displayName = firstName.split(" ")[0].toUpperCase()

    return (
        <MainDiv>
        <Background>
            <GridLateral />
            <Grid>
                <LogoDiv>
                    <StyleLogo />
                </LogoDiv>
                <TextBox>
                    <TextField><span style={{fontWeight:900}}>OI, { displayName }</span> <br/>CONFIRME SEU EMAIL <br />PRA FINALIZAR A CRIAÇÃO <br />DO SEU CADASTRO</TextField>
                    <ButtonBox onClick={resendConfirmation}>Re-enviar email de confirmação</ButtonBox>
                </TextBox>
            </Grid>
            <GridLateral />

        </Background>
        </MainDiv>
    )
}
export default Confirmation