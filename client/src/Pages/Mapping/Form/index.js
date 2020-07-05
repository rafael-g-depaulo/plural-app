import React, { useCallback, useState, useEffect } from "react";

import { FormContainer, Title } from "./styles";

import SubmitButton from "../SubmitButton";

import Gender from "./categories/genero";
import Orientation from "./categories/orientation";
import Etnia from "./categories/etnia";
import AreaAtuacao from "./categories/areaAtuacao";
import Jobs from "./categories/jobs";
import AboutUser from "./categories/aboutUser";
import RedesSociais from "./categories/redesSociais";

export const Form = ({onSubmit = () => {}, ...props}) => {
  const [gender, setGender] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [jobsCount, setJobsCount] = useState([])
  const [jobsErrMsg, setJobsErrMsg] = useState("")
  const [bio, setBio] = useState(null);
  const [social, setSocial] = useState({});
  const [orientation, setOrientation] = useState(null);
  const [etnia, setEtnia] = useState(null);
  const [atuacao, setAtuacao] = useState([]);
  const [profilePic, setProfilePic] = useState(null)

  const onSubmitButton = useCallback(
    (e) => {
      e.preventDefault();

      const form = {
        gender_orientation: gender,
        professional: jobs,
        long_bio: bio,
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
        vimeo: social.vimeo,
        profile_picture: profilePic
      };

      onSubmit(form)
    },
    [gender, jobs, bio, social, orientation, etnia, atuacao, profilePic, onSubmit]
  );

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

  const onAtuacaoChange = useCallback((areas) => {
    const listaAreas = Object.entries(areas)
      .filter(area => area[1])
      .map(([areaName]) => areaName)
    setAtuacao(listaAreas);
  }, []);

  const onJobsChange = useCallback(jobs => {
    setJobsCount(jobs);

    if ((jobs.length <= 6) && (jobsCount.length <= 6)) {
      setJobs(jobs);
    } 
  }, [ setJobs, jobsCount]);

  useEffect(() => {
    if (jobsCount.length > 6) setJobsErrMsg("Só os primeiros 6 jobs serão armazenados!")
    else setJobsErrMsg("")
  }, [jobsCount, setJobsErrMsg])

  const onProfilePicChange = useCallback((pic) => {
    setProfilePic(pic)
  }, [])

  return (
    <FormContainer onSubmit={onSubmitButton}>
      <Title>mapeamento CULTURAL LGBTQI+ DO DISTRITO FEDErAL</Title>

      <Gender onGenderChange={genderChange} />
      <Orientation onOrientationChange={onOrientationChange} />
      <Etnia onEtniaChange={onEtniaChange} />
      <AreaAtuacao onChange={onAtuacaoChange} />
      <Jobs onJobsChange={onJobsChange} errorMsg={jobsErrMsg} />

      <AboutUser onUpdateProfilePic={onProfilePicChange} onInputBio={onInputBio} />
      <RedesSociais onChange={setSocial} />

      <SubmitButton /> 
    </FormContainer>
  );
};

export default Form;
