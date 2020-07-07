import React from 'react'

export const Image = ({
  src,
  alt,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
    />
  )
}

export default Image
