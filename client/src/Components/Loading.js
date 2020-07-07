import React from 'react'
import styled from 'styled-components'
// import LoadRainbow from 'Components/LoadRainbow'
import LoadDots from 'Components/Load'

const LoadingIcon = styled(LoadDots)`
  z-index: 1001;
  margin-top: 35px;
  @media (max-width: 699px) {
    margin-top: 25px;
  }
`

export const Loading = ({
  isLoading = false,
  ...props
}) => {
  return ( !isLoading ? <></> :
    <LoadingIcon />
  )
}

export default Loading
