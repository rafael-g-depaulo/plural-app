import React from "react";

import { SubTitle, Container, Text } from "../styles";
import JobsInput from "Components/JobsInput";

export default function Jobs({ onJobsChange = () => {}, jobs, ...props }) {
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
        </Text>
      </Container>
    </>
  );
}
