import React from "react"
import styled from "styled-components";

import {
  SubTitle,
  Container,
  Text,
} from "../styles";
import JobsInput from "Components/JobsInput";

const ErrMsg = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ff2424;
  text-shadow: 0px 0px 12px rgba(255, 255, 255, 1);
  margin: 8px 0;
`

const MySpan = styled.div`
  margin-bottom: 5px;
  margin-left: 20px;
`

const Spacer = styled.span`
  padding-left: 6px;
`

export default function Jobs({ errorMsg = "", onJobsChange = () => {}, ...props }) {
  return (
    <>
      <SubTitle>
        Coloque até 6 itens com os principais destaques do seu 
        perfil profissional:
      </SubTitle>
      <Container>
        <Text>
          <MySpan>ex:<Spacer/> ArtistaMultimídia<Spacer/> Designer<Spacer/> Ilustrador<Spacer/> VJ</MySpan>
          <JobsInput onJobsChange={onJobsChange}/>
          { errorMsg !== "" && <ErrMsg>{errorMsg}</ErrMsg>}
        </Text>

      </Container>
    </>
  );
}
