import React from "react";
import styled from 'styled-components';
import Markdown from 'Components/Markdown';

const Container = styled(Markdown)`
    grid-area: title;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: #f26522;
    font-family: "Town Text";
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    font-size:1.6em;

    @media(min-width:720px){
      font-size:2em;
    }

    @media(min-width:1400px){
      font-size: 2.5em;
    }

    @media(min-width:1800px){
      font-size: 3.5em;
    }
`;

export const Title = ({
    ...props
  }) => {
    return (
      <Container
      
        {...props}
      />
    )
  }


export default Title;
