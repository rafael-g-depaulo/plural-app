import React from 'react'
import styled from 'styled-components'

import { accentFontSize } from 'Themes/default'
import PluralLogo from 'Components/PluralLogo'
import Input from './Input'
import Label from './Label'
import Button from './Button'

import bgDesktop from './bg_desktop.png'
import bgMobile from './bg_mobile.png'

const Container = styled.div`

  height: 100vh;
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-columns: minmax(8%, auto) minmax(300px, 380px) minmax(8%, auto);
  grid-template-rows: auto;
  grid-template-areas: ". content .";

  @media (max-width: 399px) {
    /* styles para mobile */
    background-image: url(${bgMobile});
  }
  @media (min-width: 400px) {
    /* styles para desktop */
    background-image: url(${bgDesktop});
  }
`

const Content = styled.div`
  height: 100%;
  grid-area: content;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

`

const Logo = styled(PluralLogo)`
  margin-left: 20px;
  margin-bottom: 30px;
`

const MyInput = styled(Input)`
  margin-bottom: 10px;
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 13px;

  & > * {
    font-family: "Town Text";
    font-size: ${accentFontSize}px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: justify;
    color: #ffffff;
  }
`

const MyButton = styled(Button)`
  margin-bottom: 20px;
`

const Text = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;

  margin-bottom: 20px;
`

const SocialButton = styled(Button)`
  width: 45%;
  background-color: ${props => props.color};
`

const Social = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Display = ({
  LinkComponent = "span",
  ...props
}) => {
  return (
    <Container>
      <Content>
        {/* conteúdo do display da página de login */}
        <Logo />
        <Label for="email">EMAIL</Label>
        <MyInput name="email" />
        <Label for="email">EMAIL</Label>
        <MyInput name="email" />
        <Links>
          <LinkComponent>Cadastre-se</LinkComponent>
          <LinkComponent>Esqueci a minha senha</LinkComponent>
        </Links>
        <MyButton>ENTRAR</MyButton>
        <Text>OU ENTRE COM<br/>SUAS REDES SOCIAIS</Text>
        <Social>
          <SocialButton color="#003172">Entre com F</SocialButton>
          <SocialButton color="#9f005d">Entre com F</SocialButton>
        </Social>
      </Content>
    </Container>
  )
}

export default Display
