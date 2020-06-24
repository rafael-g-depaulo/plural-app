import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Culture({ onCultureChange = () => {}, ...props }) {
  const [culture, setCulture] = useState("");

  useEffect(() => {
    onCultureChange(culture);
  }, [culture, onCultureChange]);

  function handleCultureChange(e) {
    setCulture(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>ÁREAS CULTURAIS EM QUE ATUA</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="culture"
              value="musica"
              type="radio"
              onChange={handleCultureChange}
            />
            musica
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="culture"
              value="artes cênicas"
              type="radio"
              onChange={handleCultureChange}
            />
            artes cênicas
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="culture"
              value="produção"
              type="radio"
              onChange={handleCultureChange}
            />
            produção
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="culture"
              value="comunicação"
              type="radio"
              onChange={handleCultureChange}
            />
            comunicação
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="culture"
              value="artes visuais"
              type="radio"
              onChange={handleCultureChange}
            />
            artes visuais
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="culture"
              value="literatura"
              type="radio"
              onChange={handleCultureChange}
            />
            literatura
          </CheckboxLabel>
          <CheckboxLabel style={{ paddingRight: 20 }}>
            <Checkbox
              name="culture"
              value="equipe técnica"
              type="radio"
              onChange={handleCultureChange}
            />
            equipe técnica
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="culture"
              value="moda"
              type="radio"
              onChange={handleCultureChange}
            />
            moda
          </CheckboxLabel>
        </Container>
      </Group>
      <div id="columnOut">
        <CheckboxLabel>
          <Checkbox
            name="culture"
            value="artes digital"
            type="radio"
            onChange={handleCultureChange}
          />
          arte digital e jogos eletrônicos
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            name="culture"
            value="fotografia e cinema"
            type="radio"
            onChange={handleCultureChange}
          />
          fotografia e cinema
        </CheckboxLabel>
      </div>
    </>
  );
}
