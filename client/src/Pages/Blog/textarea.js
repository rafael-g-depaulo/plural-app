import React from "react";
import styled from 'styled-components';
import Title from "./title";
import Date from "./data";
import Image from "Components/Markdown/Image"
import Markdown from "Components/Markdown"


const TextArea = styled.div`
grid-area: blog;
height:100%;
width: 100%;
display: inline-grid;
grid-template-columns: 100%;
/* grid-template-rows: 10% 10% 30% 50%; */
grid-template-areas: 
        "title"
        "data"
        "image"
        "text"
    ;

    @media(min-width:1020px){
      margin-top: 8vh;
    }
    @media(min-width:1800px){
      margin-top: 12vh;
    }
`;

const Capa = styled.div`
grid-area: image;
height:100%;
width: 100%;
`;

const BlockImg = styled(Image)`
    width: 100%;
    height:100%;

`;

const Credit = styled.p`
    margin-top: 1%;
    font-style: italic;
    color:#ffffff;
    font-size: 0.8em;
    font-family: "Town Text";

  @media(min-width:720px){
    font-size: 1em;
  }

  @media(min-width: 1400px){
    font-size: 1.4em;
    font-weight: 500;
  }

  @media(min-width: 1800px){
    font-size: 2em;
    font-weight: 500;
  }


`;

const BlogPost = styled.div`
    height: auto;
    color: white;
    margin-top: 10%;
    text-align: justify;
    font-family: "Town Text";
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: justify;
    color: #ffffff;
    margin-bottom:10vh;

    @media(min-width:760px){
      font-weight: 500;
    }

    @media(min-width: 1400px){
      font-size: 1.8em;
      font-weight: 500;

    }

    @media(min-width: 1800px){
    font-size: 2em;
    font-weight: 500;
  }
`;



export const Area = ({
    ...props
  }) => {
    let title = props.info.title
    let imgSrc = props.info.capa.url;
    let blog = props.info.body;
    return (
      <TextArea
      
        {...props}
      >
        <Title source={title}></Title>
        <Date datatime={props.info.created_at}/>
        <Capa>
        <BlockImg src={imgSrc}/>
        <Credit>Teste</Credit>
        </Capa>
        <BlogPost>
        <Markdown source={blog}/>
        </BlogPost>
          </TextArea>
    )
  }


export default Area;
