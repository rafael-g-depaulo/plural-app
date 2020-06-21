import React from "react"
import styled from 'styled-components';


const Navbar = styled.div`
    grid-area: nav;
    display:flex;
    width:100%;
    background: rgba(0,0,0,0);

`;

const Button = styled.button`
  display: inline-block;
  color: #f26522;
`;


function NavBar() {


    return (
        <Navbar>
            
            
                <Button as="a" href="/">Blog</Button>
                <Button as="a" href="/">Perfil</Button>
                <Button as="a" href="/">Programação</Button>
                <Button as="a" href="/">Mapeamento</Button>

            

        </Navbar>
    )
}

export default NavBar;