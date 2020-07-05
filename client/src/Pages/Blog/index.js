import React, { useCallback } from "react"
import styled from 'styled-components'
import { useParams, useHistory } from "react-router-dom"
import { useAPICache } from "Hooks/useAPICache"

import { getBlogPost } from "Api/blog"

import Back from "Components/Post/background"
import LoadDots from "Components/Load"
import PopUp from "Components/PopUp"

import Area from "./textarea";
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

export const Blog = ({ ...props }) => {

  const { id_post } = useParams()

  const getBlog = useCallback(() => getBlogPost(id_post), [id_post])
  const { data, status } = useAPICache(`blog/${id_post}`, null, getBlog)

  // error handling
  const open = status !== 200
  const { title, message } =
    status === 404 ? { title: "Post não existe", message: "Esse post não existe" } :
    status === 500 ? { title: "Erro de conexão", message: "Por favor tente de novo mais tarde" } :
    { title: "Erro", message: "Houve um erro. Tente de novo mais tarde" }

  // redirect to blog list on popup close
  const history = useHistory()
  const onClose = useCallback(() => {
    history.push("/blog")
  }, [history])
  
  return (<>
    <Back>
      <Container>
        <Navigation mbSmall="0" mbLarge="0" grid="nav"/>
        {
          data === null || status !== 200 ?
            <LoadDots />
            :
            <Area info={data} />
        };
                </Container>
    </Back>
    <PopUp {...{ open, title, message, onClose }} />
  </>)
}

export default Blog