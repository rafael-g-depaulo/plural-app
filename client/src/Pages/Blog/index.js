import React, { useCallback } from "react"
import styled from 'styled-components'
import { getBlogPost } from "Api/blog"

import { useParams } from "react-router-dom"

import Back from "Components/Post/background"
import PluralLogo from 'Components/Logo'
import NavBar from 'Components/Menu'
import LoadDots from "Components/Load"

import Area from "./textarea";
import { useAPICache } from "Hooks/useAPICache"

const Container = styled.div`
    display: inline-grid;
    width:100%;
    height:100%;
    grid-template-columns: 10% 80% 10%;
    /* grid-template-rows: 15% 5% 80%; */
    grid-template-areas: 
        ". logo ."
        ". nav ."
        ". blog ."
    ;

    @media(min-width:760px){
        grid-template-columns:20% 60% 20%;
    }

    @media(min-width:1800px){
        grid-template-columns:30% 40% 30%;
    }
`;


const LogoDiv = styled.div`
    grid-area: logo;
    display: flex;
    justify-content:flex-start;
    align-items: flex-end;
    height:15vh;
    width: 100%;
    margin-left: 5%;

    @media(min-width:760px){
        /* justify-content:center; */
    }

    @media(min-width:1020px){
        margin-top: 30vh;
    }

    @media(min-width:1800px){
        margin-top: 70vh;
    }

`;
const Logo = styled(PluralLogo)`

    @media(min-width:760px){
        height:auto;
        width:60%;
    }

    @media(min-width:1300px){
        height:auto;
        width:45%;
    }

`;

const Navigation = styled.div`
    grid-area: nav;
    width:100%;
    height: 5vh;
    margin-top: 2vh;
    display: flex;
    align-items:center;
    justify-content: flex-start;

    @media(min-width:760px){
        margin-top: 3vh;
    }

    @media(min-width: 1400px){
        margin-top: 6vh;
    }

    @media(min-width: 1800px){
        margin-top: 20vh;
    }

`;

export const Blog = ({...props}) =>{

    const { id_post } = useParams()

    const getBlog = useCallback(() => getBlogPost(id_post), [id_post])
    const { data, status } = useAPICache(`blog/${id_post}`, null, getBlog)
    
    return(
        <Back>
            <Container>
                <LogoDiv>   
                    <Logo></Logo>
                    </LogoDiv>
                    <Navigation>
                        <NavBar></NavBar>
                    </Navigation>
                        {
                            data === null || status !== 200 ? 
                            <LoadDots/>
                            :
                            <Area info={data}/>
                        };
                </Container>
        </Back>
    )
}

export default Blog