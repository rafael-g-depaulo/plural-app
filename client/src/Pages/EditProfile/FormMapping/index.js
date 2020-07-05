import React, { useState, useEffect, useCallback } from "react";

import Display from "./Display";
import PopUp from "Components/PopUp";

import { useHistory } from "react-router-dom";
import { updateMapping } from "Api/Mapping";

const socialList = [
  "facebook",
  "instagram",
  "linkedin",
  "youtube",
  "twitter",
  "spotify",
  "deezer",
  "tiktok",
  "tumblr",
  "vimeo",
];
const getInitialSocial = (user) =>
  socialList.map((social) => [
    social,
    user?.mapping[social] === "undefined" ? "" : user?.mapping[social],
  ]);

export const Form = ({ currentUser, ...props }) => {
  const history = useHistory();

  // mapping objects

  const genderMap = {
    1: "travesti",
    2: "mulher trans",
    3: "homem trans",
    4: "não-binárie",
    5: "pessoa cis",
    6: "prefiro não dizer",
  };

  const [gender, setGender] = useState(
    genderMap[currentUser?.mapping?.gender_orientation]
  );

  const sexualOrientationMap = {
    1: "lésbica",
    2: "bissexual",
    3: "gay",
    4: "heterossexual",
    5: "pansexual",
    6: "assexual",
    7: "prefiro não dizer",
    8: "outros",
  };

  const [orientation, setOrientation] = useState(
    sexualOrientationMap[currentUser?.mapping?.sexual_orientation]
  );

  const etniaMap = {
    1: "branca",
    2: "indígena",
    3: "negra (preta ou parda-afro-descendente)",
    4: "amarela (de ascendência asiática)",
  };

  const [etnia, setEtnia] = useState(etniaMap[currentUser?.mapping?.ethnicity]);
  const [atuacao, setAtuacao] = useState(currentUser?.mapping?.art_category);

  const [jobs, setJobs] = useState(currentUser?.mapping?.professional);
  const [jobsCount, setJobsCount] = useState([]);
  const [jobsErrMsg, setJobsErrMsg] = useState("");

  const [profilePic, setProfilePic] = useState(null);

  const [bio, setBio] = useState(currentUser?.mapping?.long_bio);

  const [social, setSocial] = useState(
    Object.fromEntries(getInitialSocial(currentUser))
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
      .filter((area) => area[1])
      .map(([areaName]) => areaName);
    setAtuacao(listaAreas);
  }, []);

  const onJobsChange = useCallback(
    (jobs) => {
      setJobsCount(jobs);
      if (jobs.length <= 6 && jobsCount.length <= 6) {
        setJobs(jobs);
      }
    },
    [setJobs, jobsCount]
  );

  const onProfilePicChange = useCallback((pic) => {
    setProfilePic(pic);
  }, []);

  useEffect(() => {
    if (jobsCount.length > 6)
      setJobsErrMsg("Só os primeiros 6 jobs serão armazenados!");
    else setJobsErrMsg("");
  }, [jobsCount, setJobsErrMsg]);

  // error popup status
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);

  // submit form
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("file", profilePic);
      formData.append("sexual_orientation", orientation);
      formData.append("ethnicity", etnia);
      formData.append("gender_orientation", gender);
      formData.append("facebook", social.facebook);
      formData.append("twitter", social.twitter);
      formData.append("instagram", social.instagram);
      formData.append("art_category", atuacao);
      formData.append("spotify", social.spotify);
      formData.append("deezer", social.deezer);
      formData.append("linkedin", social.linkedin);
      formData.append("tiktok", social.tiktok);
      formData.append("tumblr", social.tumblr);
      formData.append("vimeo", social.vimeo);
      formData.append("youtube", social.youtube);
      formData.append("long_bio", bio);
      formData.append("professional", jobs);
      formData.append("id", currentUser?.mapping?.id);

      // const form = {
      //   gender_orientation: gender,
      //   professional: jobs,
      //   long_bio: bio,
      //   social,
      //   sexual_orientation: orientation,
      //   ethnicity: etnia,
      //   art_category: atuacao,
      //   facebook: social.facebook,
      //   twitter: social.twitter,
      //   instagram: social.instagram,
      //   youtube: social.youtube,
      //   linkedin: social.linkedin,
      //   spotify: social.spotify,
      //   deezer: social.deezer,
      //   tiktok: social.tiktok,
      //   tumblr: social.tumblr,
      //   vimeo: social.vimeo,
      //   id: currentUser?.mapping?.id,
      // };

      updateMapping(formData)
        .then((res) => {
          history.push("/me");
          window.location.reload();
        })
        .catch((err) => {
          setStatus(err.response?.status ?? 500);
          setOpen(true);
        });
    },
    [
      history,
      atuacao,
      bio,
      currentUser,
      etnia,
      gender,
      jobs,
      orientation,
      social,
    ]
  );

  const getPopUpMessage = useCallback((status) => {
    switch (status) {
      case 422:
        return {
          title: "Cadastro inválido",
          message: "Por favor verifique os campos e tente novamente",
        };
      case 500:
        return {
          title: "Erro",
          message: "Por favor tente novamente",
        };
      default:
        return {
          title: "Erro",
          message: "Tente novamente mais tarde",
        };
    }
  }, []);

  return (
    <>
      <Display
        {...{
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
          bio,
          onInputBio,
          social,
          setSocial,
          profilePic,
          onProfilePicChange,
          onSubmit,
        }}
        {...props}
      />
      <PopUp open={open} {...getPopUpMessage(status)} />
    </>
  );
};

export default Form;
