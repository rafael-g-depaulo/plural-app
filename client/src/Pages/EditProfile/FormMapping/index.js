import React, { useState, useCallback } from "react";

import Display from "./Display";
import PopUp from "Components/PopUp";

import { useHistory } from "react-router-dom";

export const Form = ({ currentUser, ...props }) => {
  const history = useHistory();

  // mapping objects
  const [gender, setGender] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [bio, setBio] = useState(null);
  const [name, setName] = useState(null);
  const [social, setSocial] = useState({});
  const [orientation, setOrientation] = useState(null);
  const [etnia, setEtnia] = useState(null);
  const [atuacao, setAtuacao] = useState(null);

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

  const onAtuacaoChange = useCallback((e) => {
    setAtuacao(e.target.value);
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
  const onSubmit = useCallback((e) => {
    e.preventDefault();

    // api call
  }, []);

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
          onSubmit,
          onUpdateName,
          onInputBio,
          onOrientationChange,
          genderChange,
          onEtniaChange,
          onAtuacaoChange,
          onJobsChange,
          setSocial,
        }}
        {...props}
      />
      <PopUp open={open} {...getPopUpMessage(status)} />
    </>
  );
};

export default Form;
