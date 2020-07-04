import React from "react";
import styled from "styled-components";

import { SubTitle, Container, Text } from "../styles";
import JobsInput from "Components/JobsInput";

const ErrMsg = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ff2424;
  text-shadow: 0px 0px 12px rgba(255, 255, 255, 1);
  margin: 8px 0;
`;

export default function Jobs({
  errorMsg = "",
  onJobsChange = () => {},
  jobs,
  ...props
}) {
  return (
    <>
      <SubTitle>
        Coloque até 6 hashtags com os principais destaques do seu perfil
        profissional:
      </SubTitle>
      <Container>
        <Text>
          ex: #ArtistaMultimídia #Designer #Ilustrador #VJ
          <JobsInput defaultJobs={jobs} onJobsChange={onJobsChange} />
          {errorMsg !== "" && <ErrMsg>{errorMsg}</ErrMsg>}
        </Text>
      </Container>
    </>
  );
}
