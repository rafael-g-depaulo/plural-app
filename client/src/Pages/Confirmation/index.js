import React from 'react'
import Background from './background'
import styled from 'styled-components';
import PluralLogo from 'Components/PluralLogo'
import TextBox from './textbox'
import TextField from './text'
import { useContext } from 'react';
import UserContext from 'Context/User';

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



export const Confirmation = ({
    ...props
}) => {
    const { currentUser } = useContext(UserContext)
    const userName = currentUser.name.split(" ")[0].toUpperCase()

    return (
        <MainDiv>
        <Background>
            <GridLateral />
            <Grid>
                <LogoDiv>
                    <StyleLogo />
                </LogoDiv>
                <TextBox>
                    <TextField><span style={{fontWeight:900}}>OI, { userName }</span> <br/>CONFIRME SEU EMAIL <br />PRA FINALIZAR A CRIAÇÃO <br />DO SEU CADASTRO</TextField>

                </TextBox>
            </Grid>
            <GridLateral />

        </Background>
        </MainDiv>
    )
}
export default Confirmation