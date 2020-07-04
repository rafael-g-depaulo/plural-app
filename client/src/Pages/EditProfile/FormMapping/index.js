import React, { useState, useCallback } from "react";

import Display from "./Display";
import PopUp from "Components/PopUp";

import { useHistory } from "react-router-dom";
import { updateMapping } from "Api/Mapping";

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
    genderMap[currentUser.mapping.gender_orientation]
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
    sexualOrientationMap[currentUser.mapping.sexual_orientation]
  );

  const [etnia, setEtnia] = useState(null);

  const [atuacao, setAtuacao] = useState(currentUser.mapping.art_category);

  const [jobs, setJobs] = useState(currentUser.mapping.professional);

  const [name, setName] = useState(currentUser.mapping.artistic_name);

  const [bio, setBio] = useState(currentUser.mapping.long_bio);

  const [social, setSocial] = useState({
    facebook: currentUser.mapping.facebook,
    instagram: currentUser.mapping.instagram,
    linkedin: currentUser.mapping.linkedin,
    youtube: currentUser.mapping.youtube,
    twitter: currentUser.mapping.twitter,
    spotify: currentUser.mapping.spotify,
    deezer: currentUser.mapping.deezer,
    tiktok: currentUser.mapping.tiktok,
    tumblr: currentUser.mapping.tumblr,
    vimeo: currentUser.mapping.vimeo,
  });

  const onUpdateName = useCallback((e) => {
    setName(e.target.value);
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

  const onAtuacaoChange = useCallback((areas) => {
    const listaAreas = Object.entries(areas)
      .filter((area) => area[1])
      .map(([areaName]) => areaName);
    setAtuacao(listaAreas);
  }, []);

  const onJobsChange = useCallback(
    (jobs) => {
      if (jobs.length !== 6) {
        setJobs(jobs);
      }
    },
    [setJobs]
  );

  // error popup status
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);

  // submit form
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const form = {
        gender_orientation: gender,
        professional: jobs,
        long_bio: bio,
        name,
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
        vimeo: social.vimeo,
        id: currentUser.mapping.id,
      };

      updateMapping(form)
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
      atuacao,
      bio,
      currentUser.mapping.id,
      etnia,
      gender,
      jobs,
      name,
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
          onEtniaChange,
          atuacao,
          onAtuacaoChange,
          jobs,
          onJobsChange,
          name,
          onUpdateName,
          bio,
          onInputBio,
          social,
          setSocial,
          onSubmit,
        }}
        {...props}
      />
      <PopUp open={open} {...getPopUpMessage(status)} />
    </>
  );
};

export default Form;
