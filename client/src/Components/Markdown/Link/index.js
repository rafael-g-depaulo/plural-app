import React from 'react'
import YoutubePlayer from './YoutubePlayer'
import HtmlLink from './HtmlLink'

export const Link = ({
  ...props
}) => {

  // TODO: add test to see if its a youtube link
  const isYoutube = false

  return (
    isYoutube ?
      <YoutubePlayer {...props}/>
    :
      <HtmlLink {...props}/>
  )
}

export default Link
