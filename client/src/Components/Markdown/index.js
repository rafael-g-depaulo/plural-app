import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';


import Link from './Link'
import Image from './Image'

const Imagem = styled(Image)`
  width: 100%;
`;

export const Markdown = ({
  ...props
}) => {
  return (
    <ReactMarkdown
      // check https://github.com/rexxars/react-markdown to see what name to give renderers
      renderers={{
        "link": Link,
        "image": Imagem,
      }}
      {...props}
    />
  )
}

export default Markdown
