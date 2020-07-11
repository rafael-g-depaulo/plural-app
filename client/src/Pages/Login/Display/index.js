import React from "react";
import styled, { css } from "styled-components";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
// import SocialLink from "./SocialLink";

import { accentFontSize } from "Themes/default";
import PluralLogo from "Components/PluralLogo";
import Input from "./Input";
import Label from "./Label";
import Parceiros from "./Parceiros";
import Button from "./Button";

import { Link } from 'react-router-dom'

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
    ".    .    .";

  @media (max-width: 399px) {
    /* styles para mobile */
    background-image: url(${bgMobile});
  }
  @media (min-width: 400px) {
    /* styles para desktop */
    background-image: url(${bgDesktop});
  }
`;

const Content = styled.div`
  height: 100%;
  grid-area: content;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${({ mTop }) => mTop && css`margin-top: ${mTop};`}
`;

const Logo = styled(PluralLogo)`
  margin-left: 20px;
  margin-bottom: 15px;
`;

const MyInput = styled(Input)`
  margin-bottom: 10px;
`;

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
`;

const MyButton = styled(Button)`
  margin-bottom: 20px;
`;

// const Text = styled.span`
//   font-size: 16px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.5;
//   letter-spacing: normal;
//   text-align: justify;
//   color: #ffffff;
//   margin-bottom: 20px;
// `;

// const Social = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const Icon = styled(FontAwesomeIcon)`
//   font-size: 18px;
//   margin-top: 2px;
//   margin-left: 5px;
// `;

const MyLink = styled(Link)`
  &, &:hover, &:focus, &:active {
    text-decoration: none;
    color: #ffffff;
  }
`

const Text = styled.p`
  font-family: "Town Text";
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #fff;
  margin-bottom: 3px;
  margin-top: 0;

  @media (min-width: 700px) {
    font-size: 20px;
  }
`

const ColouredLink = styled(Link)`
  color: #f3763b;
  text-decoration: none;
  &:hover {
    color: #ffdb88;
  }
  &:focus {
    color: #f5ce63;
  }
  &:active {
    color: #ffcf4a;
  }

  transition: ease-in-out 0.1s;
`

export const Display = ({
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
        <Text>Bem vinde ao Festival Plural!</Text>
        <Text>Acesse a <ColouredLink to="/event">programação do festival</ColouredLink>, ou cadastre-se em nossas plataformas digitais.</Text>
        {/* <form onSubmit={onSubmit}> */}
        <Content mTop="15px" as="form" onSubmit={onSubmit}>
          <Label htmlFor="email">EMAIL</Label>
          <MyInput
            value={email}
            onChange={onChangeEmail}
            name="email"
            type="email"
            autoComplete="username"
          />
          <Label htmlFor="pwd">SENHA</Label>
          <MyInput
            value={pwd}
            onChange={onChangePwd}
            name="pwd"
            type="password"
            autoComplete="current-password"
          />
          <Links>
            <MyLink to="/signup">Cadastre-se</MyLink>
            <MyLink to="/password-reset">Esqueci a minha senha</MyLink>
          </Links>
          <MyButton type="submit">ENTRAR</MyButton>
        </Content>
        {/* </form> */}
        {/* <Text>
          OU ENTRE COM
          <br />
          SUAS REDES SOCIAIS:
        </Text> */}
        {/* <Social>
          <SocialLink
            href="/api/auth/facebook"
            color="#003172"
            hcolor="#004db3"
            acolor="#0060de"
          >
            Entre com <Icon icon={faFacebook} />
          </SocialLink>
          <SocialLink
            href="/api/auth/google"
            color="#9f005d"
            hcolor="#c50073"
            acolor="#d4007c"
          >
            Entre com <Icon icon={faGooglePlus} />
          </SocialLink>
        </Social> */}
        <Parceiros />
      </Content>
    </Container>
  );
};

export default Display;
