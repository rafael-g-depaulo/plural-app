import React, { useCallback, useState } from "react";

import { FormContainer, Title } from "./styles";

import SubmitButton from "../SubmitButton";

import Gender from "./categories/genero";
import Orientation from "./categories/orientation";
import Etnia from "./categories/etnia";
import AreaAtuacao from "./categories/areaAtuacao";
import Jobs from "./categories/jobs";
import AboutUser from "./categories/aboutUser";
import RedesSociais from "./categories/redesSociais";

export const Form = ({...props}) => {
  const [gender, setGender] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [bio, setBio] = useState(null);
  const [user, setUser] = useState(null);
  const [social, setSocial] = useState({});
  const [orientation, setOrientation] = useState(null);
  const [etnia, setEtnia] = useState(null);
  const [atuacao, setAtuacao] = useState(null);

  const onSubmitButton = useCallback(
    (e) => {
      e.preventDefault();

      const form = {
        gender_orientation: gender,
        professional: jobs,
        long_bio: bio,
        user,
        social,
        sexual_orientation: orientation,
        etnia,
        art_category: atuacao,
        facebook: social.facebook,
        twitter: social.twitter,
        instagram: social.instagram,
        youtube: social.youtube,
        linkedin: social.linkedin,
        spotify: social.spotify,
        deezer: social.deezer,
        tiktok: social.tiktok,
        tumblr: social.tumblr,
        vimeo: social.vimeo
      };

      props.onSubmitCallback(form)
    },
    [gender, jobs, bio, user, social, orientation, etnia, atuacao, props]
  );

  const onUpdateUser = useCallback((e) => {
    setUser(e.target.value);
  }, []);

  const onInputBio = useCallback((e) => {
    setBio(e.target.value);
  }, []);

  const onOrientationChange = useCallback((e) => {
    setOrientation(e.target.value);
  }, []);

  const genderChange = useCallback((e) => {
    setGender(e.target.value);
  }, []);

  const onEtniaChange = useCallback((e) => {
    setEtnia(e.target.value);
  }, []);

  const onAtuacaoChange = useCallback((e) => {
    setAtuacao(e.target.value);
  }, []);

  const onJobsChange = useCallback((jobs) => {
    setJobs(jobs);
  }, []);

  return (
    <FormContainer onSubmit={onSubmitButton}>
      <Title>mapeamento CULTURAL LGBTQI+ DO DISTRITO FEDErAL</Title>

      <Gender onGenderChange={genderChange} />
      <Orientation onOrientationChange={onOrientationChange} />
      <Etnia onEtniaChange={onEtniaChange} />
      <AreaAtuacao onAtuacaoChange={onAtuacaoChange} />
      <Jobs onJobsChange={onJobsChange} />

      <AboutUser onUpdateUser={onUpdateUser} onInputBio={onInputBio} />
      <RedesSociais onChange={setSocial} />

      <SubmitButton />
    </FormContainer>
  );
};

export default Form;
