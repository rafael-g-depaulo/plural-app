import React, { useCallback } from "react"
import styled from 'styled-components'

import { useParams, useHistory } from "react-router-dom"
import { useAPICache } from "Hooks/useAPICache"
import { getEvent } from "Api/event"

import Area from "./textarea"

import Back from "Components/Post/background"
import LoadDots from "Components/Load"
import PopUp from "Components/PopUp"
import Navigation from "Components/Navigation"

const Container = styled.div`
  display: inline-grid;
  width:100%;
  height:100%;
  grid-template-columns: 1fr 18fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
    ". nav ."
    ". blog ."
  ;

  @media(min-width:760px){
    grid-template-columns: 1fr 8fr 1fr;
  }
`;

export const Event = ({ ...props }) => {

  const { id_event } = useParams()

  const apiCall = useCallback(() => getEvent(id_event), [id_event])
  const { data, status } = useAPICache(`event/${id_event}`, null, apiCall)

  // error handling
  const open = status !== 200 || status === undefined
  const { title, message } =
    status === 404 ? { title: "Atividade não existe", message: "Essa atividade não existe" } :
    status === 500 ? { title: "Erro de conexão", message: "Por favor tente de novo mais tarde" } :
    { title: "Carregando", message: "Carregando o evento. Por favor espere" }

  // redirect to blog list on popup close
  const history = useHistory()
  const onClose = useCallback(() => {
    if (status === 404) history.push("/event")
  }, [history, status])

  return (<>
    <Back>
      <Container>
        <Navigation mbSmall="0" mbLarge="0" grid="nav"/>
        {
          data === null || open ?
            (status !== 404 ? <LoadDots /> : <></>)
            :
            <Area info={data} />

        }
      </Container>
    </Back>
    <PopUp {...{ open, title, message, onClose }} />
  </>)
}

export default Event
