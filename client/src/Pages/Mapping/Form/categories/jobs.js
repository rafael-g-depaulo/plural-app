import React from "react"

import {
  SubTitle,
  Container,
  Text,
} from "../styles";
import JobsInput from "Components/JobsInput";

export default function Jobs({ onJobsChange = () => {}, ...props }) {
  return (
    <>
      <SubTitle>
        Coloque até 6 hashtags com os principais destaques do seu 
        perfil profissional:
      </SubTitle>
      <Container>
        <Text>
          ex: #ArtistaMultimídia #Designer #Ilustrador #VJ 
          <JobsInput onJobsChange={onJobsChange}/>
        </Text>

      </Container>
    </>
  );
}
