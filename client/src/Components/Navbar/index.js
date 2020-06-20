import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-bottom: -10px;
`;

const Text = styled(Link)`
    font-family: "Town Text";
    font-size: 12.5px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: justify;
    color: #f26522;
    text-transform: uppercase;
    text-decoration: none;
    padding-right: ${props => props.paddingright ?? "0"};
`;

export const Navbar = ({
    ...props
}) => {
    return (
       <Container>
           <Text to="/blog" paddingright="17px">blog</Text>
           <Text to="/" paddingright="17px">perfil</Text>
           <Text to="/" paddingright="17px">programação</Text>
           <Text to="/participar-mapeamento">mapeamento</Text>
       </Container>
    )
};

export default Navbar;
