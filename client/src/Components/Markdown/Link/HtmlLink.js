import React from 'react'
import styled from 'styled-components';

const Clica = styled.a`

    font-family: "Town Text";
    font-weight: 700;
    color: #f26522;
    text-decoration:none;

    &:active {
    color:#ebce8b; 
  }
`;
export const HtmlLink = ({
  href,
  ...props
}) => {

  let ready =false;

  if (href.substring(0,4) ==="http"){
    ready = true;
  }
  return (
    <Clica href={ ready? href:("http://" +href) } target='_blank' rel='noopener'>{props.children}</Clica>
  )
}

export default HtmlLink
