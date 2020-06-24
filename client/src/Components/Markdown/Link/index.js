import React from 'react'
import YoutubePlayer from './YoutubePlayer'
import HtmlLink from './HtmlLink'

export const Link = ({
  href,
  ...props
}) => {

  // TODO: add test to see if its a youtube link
  let isYoutube = false

  let ready = false;
  
  if (href.substring(0, 4) === "http") {
    ready = true;
  }
   
  let address = ready ? href : ("https://" + href);

  if(address.match(/^(?:https?:\/\/)?(?:(?:www\.)?youtube.com\/watch\?v=|youtu.be\/)(\w+)$/)){
    isYoutube = true;
  }
  else if(address.substr(0,15)==="http://youtu.be"){
    isYoutube = true;
    
  }
  else if(address.substr(0,29)==="https://www.youtube.com/embed"){
    isYoutube = true;
  }
  return (
    isYoutube ?
     <YoutubePlayer href={href} {...props}/>
    :
    <HtmlLink href={href} {...props} />
  )
}

export default Link
