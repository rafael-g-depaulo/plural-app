import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons'

import { accentFontSize } from 'Themes/default'
import PluralLogo from 'Components/PluralLogo'
import Input from './Input'
import Label from './Label'
import Parceiros from './Parceiros'
import Button from './Button'

import bgDesktop from './bg_desktop.png'
import bgMobile from './bg_mobile.png'

const Container = styled.div`

  height: 100vh;
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-columns: minmax(8%, auto) minmax(300px, 380px) minmax(8%, auto);
  grid-template-rows: minmax(0, 3fr) auto minmax(0, 1fr);
  grid-template-areas:
    ".    .    ."
    ". content ."
    ".    .    ."
  ;

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
  width: 48%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.hcolor};
  }
  &:active {
    background-color: ${props => props.acolor};
  }
`

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
  margin-top: 2px;
  margin-left: 5px;
`

const SocialLink = ({
  href,
  children,
}) => (
  <a href={href} target="_blanc" rel="noopener" >{ children }</a>
)

export const Display = ({
  LinkComponent = "span",
  email = "",
  onChangeEmail = () => {},
  pwd = "",
  onChangePwd = () => {}, 
  onSubmit = () => {},
  ...props
}) => {
  return (
    <Container>
      <Content>
        {/* conteúdo do display da página de login */}
        <Logo />
        {/* <form onSubmit={onSubmit}> */}
        <Content as="form" onSubmit={onSubmit}>
          <Label htmlFor="email">EMAIL</Label>
          <MyInput value={email} onChange={onChangeEmail} name="email" type="email" autoComplete="username" />
          <Label htmlFor="pwd">SENHA</Label>
          <MyInput value={pwd} onChange={onChangePwd} name="pwd" type="password" autoComplete="current-password"/>
          <Links>
            <LinkComponent>Cadastre-se</LinkComponent>
            <LinkComponent>Esqueci a minha senha</LinkComponent>
          </Links>
          <MyButton type="submit">ENTRAR</MyButton>
        </Content>
        {/* </form> */}
        <Text>OU ENTRE COM<br/>SUAS REDES SOCIAIS:</Text>
        <Social>
          <SocialLink href={`${process.env.REACT_APP_SERVER_URL}/api/auth/facebook`}><SocialButton color="#003172" hcolor="#004db3" acolor="#0060de"><Box>Entre com <Icon icon={faFacebook} /></Box></SocialButton></SocialLink>
          <SocialLink href={`${process.env.REACT_APP_SERVER_URL}/api/auth/google`}><SocialButton color="#9f005d" hcolor="#c50073" acolor="#d4007c"><Box>Entre com <Icon icon={faGooglePlus} /></Box></SocialButton></SocialLink>
        </Social>
        <Parceiros />
      </Content>
    </Container>
  )
}

export default Display
