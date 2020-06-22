import React, { useState, useEffect } from "react";
import Display from "./display";
import { listAllEvents } from "Api/Programming";

export const Programming = ({ ...props }) => {
  const [eventList, setEventList] = useState([
    // exemplos
    {
      id: 1,
      title: "[Webinar] Palestra",
      body:
        "24 de julho, á partir de 17h Evento on line Uma década sobre o Mapeamento LGBTQI do Brasil, desdobramentos e importância. Palestrante: Sandro Ka - RS Arte Educador e Ativist  a  aaaa aaa aaa aaaa a",
      capa: null,
    },

    {
      id: 2,
      title: "[Webinar] Palestra",
      body:
        "24 de julho, á partir de 17h Evento on line Uma década sobre o Mapeamento LGBTQI do Brasil, desdobramentos e importância. Palestrante: Sandro Ka - RS Arte Educador e Ativist ",
      capa: null,
    },
  ]);

  // chama a API para listar os eventos (#index)
  const getEvents = async () => {
    await listAllEvents().then((response) => {
      setEventList(response.data);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return <Display {...{ eventList }} />;
};

export default Programming;
