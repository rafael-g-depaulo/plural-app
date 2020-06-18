import React from 'react'
import { StrapiBaseUrl } from 'GlobalConfig'

export const Image = ({
  src,
  alt,
  ...props
}) => {
  return (
    <img
      src={StrapiBaseUrl+src}
      alt={alt}
      {...props}
    />
  )
}

export default Image
