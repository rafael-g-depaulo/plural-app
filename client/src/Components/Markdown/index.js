import React from 'react'
import ReactMarkdown from 'react-markdown'

import Link from './Link'
import Image from './Image'

export const Markdown = ({
  ...props
}) => {
  return (
    <ReactMarkdown
      // check https://github.com/rexxars/react-markdown to see what name to give renderers
      renderers={{
        "link": Link,
        "image": Image,
      }}
      {...props}
    />
  )
}

export default Markdown
