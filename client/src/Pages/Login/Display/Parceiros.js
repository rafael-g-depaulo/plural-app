import React from 'react'
import styled from 'styled-components'

import Fac from './Logo Fac.png'
import BlocoB from './Logo Bloco B.png'
import Transforma from './Logo Transforma.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 15px;
`

const Logo = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin ?? 0};

  object-fit: contain;
`

const FacBox = styled.div`
  display: flex;
  flex-direction: column;

  & ${Logo} {
    margin-top: 5px;
  }
`

const Text = styled.span`
  font-size: 7px;
  font-weight: 100;
  font-stretch: normal;
  font-style: italic;
  letter-spacing: 0.36px;
  text-align: left;
  color: #ffffff;
`

const OtherBox = styled.div`
  border-left: 1px solid #fff;
  height: 100%;
  margin-left: 10px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const OtherBoxLogoCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:first-child {
    margin-right: 10px; 
  }

  margin-bottom: 10px;
`

export const Parceiros = ({
  ...props
}) => {
  return (
    <Container>
      <FacBox>
        <Text>Este projeto é realizado com recursos do<br />Fundo de Apoio à Cultura do Distrito Federal</Text>
        <Logo src={Fac} width="150px" height="28px"/>
      </FacBox>
      <OtherBox>
        <Text>PRODUÇÃO:</Text>
        <OtherBoxLogoCenter>
          <Logo src={BlocoB} margin="0 10px 0 0" width="45%" height="22px"/>
          <Logo src={Transforma} width="45%" height="19px"/>
        </OtherBoxLogoCenter>
      </OtherBox>
    </Container>
  )
}

export default Parceiros
