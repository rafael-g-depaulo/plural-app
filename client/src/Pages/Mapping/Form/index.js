import React from "react";

import {
  FormContainer,
  Title,
  Group,
  GroupName,
  Checkbox,
  CheckboxLabel,
  Container,
} from "./styles";

/* const handleSubmit = useCallback((e) => {
  e.preventDefault();

  // Faz chamada api e envia os dados preenchidos
}, []); */

export const Form = () => {
  // Genero
  function handleGenderChange(e) {
    console.log("target.value GENERO", e.target.value);
  }

  function handleOrientationChange(e) {
    console.log("target.value ORIENTAÇÃO", e.target.value);
  }

  return (
    <FormContainer>
      <Title>MAPEAMENTO</Title>

      <GroupName>IDENTIDADE DE GÊNERO</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="masculino"
              type="radio"
              onChange={handleGenderChange}
            />
            masculino
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="binario"
              type="radio"
              onChange={handleGenderChange}
            />
            binario
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="feminino"
              type="radio"
              onChange={handleGenderChange}
            />
            feminino
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="outros"
              type="radio"
              onChange={handleGenderChange}
            />
            outros
          </CheckboxLabel>
        </Container>
      </Group>

      <GroupName>ORIENTAÇÃO SEXUAL</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="homossexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            homossexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="assexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            assexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="bissexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            bissexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="prefiro não dizer"
              type="radio"
              onChange={handleOrientationChange}
            />
            prefiro não dizer
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="heterossexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            heterossexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="pansexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            pansexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="interssexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            interssexual
          </CheckboxLabel>
        </Container>
      </Group>

      <GroupName>ÁREAS CULTURAIS EM QUE ATUA</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="homossexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            homossexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="assexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            assexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="bissexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            bissexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="prefiro não dizer"
              type="radio"
              onChange={handleOrientationChange}
            />
            comunicação
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="heterossexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            heterossexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="pansexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            pansexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="interssexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            interssexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="interssexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            interssexual
          </CheckboxLabel>
        </Container>
      </Group>
      <div id="columnOut">
        <CheckboxLabel>
          <Checkbox
            name="orientation"
            value="prefiro não dizer"
            type="radio"
            onChange={handleOrientationChange}
          />
          arte digital e jogos eletrônicos
        </CheckboxLabel>
        <CheckboxLabel style={{ paddingTop: 10 }}>
          <Checkbox
            name="orientation"
            value="prefiro não dizer"
            type="radio"
            onChange={handleOrientationChange}
          />
          fotografia e cinema
        </CheckboxLabel>
      </div>
    </FormContainer>
  );
};

export default Form;
