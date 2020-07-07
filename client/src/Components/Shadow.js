import styled, { css } from 'styled-components'

export const Shadow = styled.div`
  position: fixed;
  background-color: black;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  
  opacity: 0;
  pointer-events: all;

  ${props => props.isLoading ? css`
    pointer-events: none;
    opacity: 0.3;
  ` : css`
    display: none;
  `}
`

export default Shadow