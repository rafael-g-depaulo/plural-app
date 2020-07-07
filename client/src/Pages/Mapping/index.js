import React, {useContext, useState} from "react";
import Background from "./Background";
import Header from "./Header";
import Form from "./Form";
import { createMapping } from "Api/Mapping";
import UserContext from "Context/User/";
import { useHistory } from "react-router-dom";

export const Mapping = () => {
  const userContext = useContext(UserContext);
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(false)

  function submitMapping(data) {
    const formData = new FormData();

    formData.append('file', data.profile_picture)
    formData.append('sexual_orientation', data.sexual_orientation)
    formData.append('ethnicity', data.etnia)
    formData.append('gender_orientation', data.gender_orientation)
    formData.append('facebook', data.facebook)
    formData.append('twitter', data.twitter)
    formData.append('instagram', data.instagram)
    formData.append('art_category', data.art_category)
    formData.append('spotify', data.spotify)
    formData.append('deezer', data.deezer)
    formData.append('linkedin', data.linkedin)
    formData.append('tiktok', data.tiktok)
    formData.append('tumblr', data.tumblr)
    formData.append('vimeo', data.vimeo)
    formData.append('youtube', data.youtube)
    formData.append('long_bio', data.long_bio)
    formData.append('professional', data.professional)

    setIsLoading(true)
    createMapping(formData)
      .then((res) => {
        setIsLoading(false)
        userContext.setCurrentUser(res.data);
        history.push("/")
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }

  return (
    <Background>
      <Header />
      <Form onSubmit={submitMapping} isLoading={isLoading}/>
    </Background>
  );
};

export default Mapping;
