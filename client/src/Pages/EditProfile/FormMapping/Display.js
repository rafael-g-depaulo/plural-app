import React from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";

import Gender from "./categories/genero";
import Orientation from "./categories/orientation";
import Etnia from "./categories/etnia";
import AreaAtuacao from "./categories/areaAtuacao";
import Jobs from "./categories/jobs";
import AboutUser from "./categories/aboutUser";
import RedesSociais from "./categories/redesSociais";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding: 0 100px 30px 20px;
  font-family: Town Display;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #f26522;

  @media (min-width: 500px) {
    padding: 0 100px 30px 30px;
    font-size: 24.5px;
  }
`;

export const Display = ({
  gender,
  genderChange,
  orientation,
  onOrientationChange,
  etnia,
  onEtniaChange,
  atuacao,
  onAtuacaoChange,
  jobs,
  onJobsChange,
  jobsErrMsg,
  name,
  onUpdateName,
  bio,
  onInputBio,
  social,
  setSocial,
  onSubmit,
  ...props
}) => {
  return (
    <Form onSubmit={onSubmit} autocomplete="off">
      <Title>Editar Mapeamento</Title>

      <Gender gender={gender} onGenderChange={genderChange} />

      <Orientation
        orientation={orientation}
        onOrientationChange={onOrientationChange}
      />

      <Etnia etnia={etnia} onEtniaChange={onEtniaChange} />

      <AreaAtuacao atuacao={atuacao} onChange={onAtuacaoChange} />

      <Jobs jobs={jobs} errorMsg={jobsErrMsg} onJobsChange={onJobsChange} />

      <AboutUser
        name={name}
        onUpdateName={onUpdateName}
        bio={bio}
        onInputBio={onInputBio}
      />

      <RedesSociais social={social} onChange={setSocial} />

      <SubmitButton />
    </Form>
  );
};

export default Display;
