import React, { useCallback } from "react";
import { useAPICache } from "Hooks/useAPICache";

import { listAllEvents } from "Api/event";

import PopUp from "Components/PopUp";
import Display from "./display";

export const Programming = ({ ...props }) => {

  const { data, status } = useAPICache(`events`, [], listAllEvents)

  // error handling
  const open = status !== 200 || status === undefined
  const { title, message } =
    status === 404 ? { title: "Erro de conexão", message: "Por favor tente de novo mais tarde" } :
    status === 500 ? { title: "Erro de conexão", message: "Por favor tente de novo mais tarde" } :
    { title: "Carregando", message: "Carregando a programação" }

  const onClose = useCallback(() => {
  }, [])

  return (<>
    <Display eventList={data} />
    <PopUp {...{ open, title, message, onClose }} />
  </>)
};

export default Programming;
