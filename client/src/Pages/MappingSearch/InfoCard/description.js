import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 205.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 14px 28px 20px 14px;
`;

const Title = styled.h1`
    max-width: 205.5px;
    font-family: "Town Text";
    
`;

export const description = ({
    ...props
}) => {
    return (
        <Container>

        </Container>
    )
}

export default description;
