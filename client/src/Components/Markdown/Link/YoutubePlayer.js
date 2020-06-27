import React from 'react'
import YouTube from 'react-youtube';
import useWidth from 'Hooks/useWidth';

export const YoutubePlayer = ({
  href,
  ...props
}) => {

  let position, id;
  let largura= useWidth();
  const opts = {
    height: "390",
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  }
  const optsb = {
    height: "230",
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  }

  if (href.substring(7,15) === "youtu.be") {
    position = href.lastIndexOf('be/')
    id = href.substr(position+3)
  } else if (href.substring(16,21) === "embed") {
    position = href.lastIndexOf('embed/')
    id = href.substr(position+6)
  } else {
    position = href.lastIndexOf('watch?v=')  
    id = href.substr(position+8)
  }
  return (
    <YouTube videoId={id} opts={(largura<760) ? optsb : opts} />
  )
}

export default YoutubePlayer
