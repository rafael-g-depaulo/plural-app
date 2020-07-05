import React, {useContext} from "react";
import Background from "./Background";
import Header from "./Header";
import Form from "./Form";
import { createMapping } from "Api/Mapping";
import UserContext from "Context/User/";
import { useHistory } from "react-router-dom";

export const Mapping = () => {
  const userContext = useContext(UserContext);
  const history = useHistory()

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

    createMapping(formData)
      .then((res) => {
        userContext.setCurrentUser(res.data);
        history.push("/")
      })
      .catch((err) => console.log(err));
  }

  return (
    <Background>
      <Header />
      <Form onSubmitCallback={submitMapping} />
    </Background>
  );
};

export default Mapping;
