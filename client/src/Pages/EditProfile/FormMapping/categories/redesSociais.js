import React, { useCallback, useEffect, useState } from "react";

import Input from "../Input";

import { Group, Text } from "../styles";

export default function RedesSociais({
  onChange = () => {},
  social,
  ...props
}) {
  const [redesSociais, setRedesSociais] = useState(social);

  const onInput = useCallback(
    (e) => {
      setRedesSociais((r) => ({ ...r, [e.target.name]: e.target.value }));
    },
    [setRedesSociais]
  );

  useEffect(() => {
    onChange(redesSociais);
  }, [redesSociais, onChange]);

  return (
    <>
      <Text style={{ marginTop: 20, fontWeight: "bold" }}>
        Fale mais sobre você!
      </Text>

      <Group>
        <Input
          placeholder="Facebook"
          id="facebook"
          name="facebook"
          defaultValue={social.facebook}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="Instagram"
          id="instagram"
          name="instagram"
          defaultValue={social.instagram}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="Linkedin"
          id="linkedin"
          name="linkedin"
          defaultValue={social.linkedin}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="YouTube"
          id="youtube"
          name="youtube"
          defaultValue={social.youtube}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="Twitter"
          id="twitter"
          name="twitter"
          defaultValue={social.twitter}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="Spotify"
          id="spotify"
          name="spotify"
          defaultValue={social.spotify}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="Deezer"
          id="deezer"
          name="deezer"
          defaultValue={social.deezer}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="Tik Tok"
          id="tiktok"
          name="tiktok"
          defaultValue={social.tiktok}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="Tumblr"
          id="tumblr"
          name="tumblr"
          defaultValue={social.tumblr}
          type="text"
          onChange={onInput}
        />
      </Group>
      <Group>
        <Input
          placeholder="Vimeo"
          id="vimeo"
          name="vimeo"
          defaultValue={social.vimeo}
          type="text"
          onChange={onInput}
        />
      </Group>
    </>
  );
}
