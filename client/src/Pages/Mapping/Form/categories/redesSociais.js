import React, { useCallback, useEffect, useState } from "react";

import Input from '../Input'

import {
  Group,
  Text
} from "../styles";
import styled from "styled-components";

const MyGroup = styled(Group)`
  width: 100%;
  /* margin-bottom: 10px; */
`

export default function RedesSociais({ onChange = () => {}, ...props }) {

    const [redesSociais, setRedesSociais] = useState({})
  
    const onInput = useCallback(e => {
      setRedesSociais(r => ({ ...r, [e.target.name]: e.target.value }))
      console.log(redesSociais);
    }, [setRedesSociais, redesSociais])
  
    useEffect(() => { onChange(redesSociais) }, [redesSociais, onChange])
  
    return (
      <>
      <Text style={{marginTop: 20, marginBottom: "5px", fontWeight: "bold"}}>
          Fale mais sobre você!
      </Text>
  
      <MyGroup>
          <Input placeholder="Facebook" id="facebook" name="facebook" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="Instagram" id="instagram" name="instagram" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="Linkedin" id="linkedin" name="linkedin" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="YouTube" id="youtube" name="youtube" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="Twitter" id="twitter" name="twitter" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="Spotify" id="spotify" name="spotify" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="Deezer" id="deezer" name="deezer" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="Tik Tok" id="tiktok" name="tiktok" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="Tumblr" id="tumblr" name="tumblr" type="text" onInput={onInput} />
      </MyGroup>
      <MyGroup>
          <Input placeholder="Vimeo" id="vimeo" name="vimeo" type="text" onInput={onInput} />
      </MyGroup>
      </>
    );
  }