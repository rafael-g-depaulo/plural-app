import React from "react";
import Display from "./display";
import { listAllEvents } from "Api/Programming";
import { useAPICache } from "Hooks/useAPICache";

export const Programming = ({ ...props }) => {

  const { data, status } = useAPICache(`events`, [], listAllEvents)

  if (status !== 200) console.log("error fetching events")
  // TODO: add error handling

  return <Display eventList={data} />;
};

export default Programming;
