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
        width:40%;
        height:auto;
        font-size:3em;
        margin-top: 10%;
    }

    @media(max-width:400px){
            width: 100%;
            font-size:1.3em;
            line-height:1.4em;
            margin-top:0;
            margin-bottom: 130%;
        }

        @media(min-width:400px) and (max-width:767px){
            width: 100%;
            font-size:1.5em;
            line-height:1.4em;
            margin-top:0;
            margin-bottom: 130%;
        }
        @media(min-width: 800px) and (max-width:1040px){
            font-size: 2.4em;
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