import React from "react"
import styled from 'styled-components';


const Navbar = styled.div`
    display:flex;
    width:100%;
    background: rgba(0,0,0,0);
    align-items: center;

    @media(min-width:760px){
        justify-content: space-around;
    
    }


`;

const Button = styled.button`
  display: inline-block;
  color: #f26522;
  font-family: "Town Text";
    font-weight: 700;
    font-size: 0.8em;
    text-decoration: none;
    padding: 0 4% 0 0;

    @media(max-width: 325px){
        font-size: 0.7em;

    }

    @media(min-width: 760px){
        font-size: 1.2em;
    }
    @media(min-width: 1020px){
        font-size: 1.65em;
        margin-top: 8vh;
    }
    @media(min-width: 1400px){
        font-size:2em;
        margin-top: 8vh;
    }

    @media(min-width: 1800px){
        font-size:3em;
        margin-top: 8vh;
    }

`;


function NavBar() {


    return (
        <Navbar>
            
            
                <Button as="a" href="/">BLOG</Button>
                <Button as="a" href="/">PERFIL</Button>
                <Button as="a" href="/">PROGRAMAÇÃO</Button>
                <Button as="a" href="/">MAPEAMENTO</Button>

            

        </Navbar>
    )
}

export default NavBar;