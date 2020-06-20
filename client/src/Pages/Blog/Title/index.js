import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -23px;
`;

const Text = styled.p`
    font-family: "Town Text";
    font-size: 23.5px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;  
    line-height: normal;   
    text-align: justify;
    text-transform: uppercase;  
    color: #f26522;
`;

export const Title = ({
    ...props
}) => {
    return (
        <Container>
            <Text>b</Text>
            <Text>l</Text>
            <Text>o</Text>
            <Text>g</Text>
        </Container>
    )
}

export default Title;
