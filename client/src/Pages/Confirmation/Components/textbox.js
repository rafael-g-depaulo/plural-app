import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width:402px;
    height:174px;
    font-family:"Town Text";
    font-size: 2em;
    color: white;
    line-height:1.8;
    margin-top: -10%;

    @media(min-width: 2500px){
        width:30%;
        height:auto;
        font-size:3em;
        margin-top: 20%;
    }

`

export const TextBox = ({
    ...props
  }) => {
    return (
        <Box {...props}>
            {props.children}

        </Box>
    )
  }

export default TextBox;