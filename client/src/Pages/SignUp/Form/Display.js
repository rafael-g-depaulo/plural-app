import React from "react";
import styled from "styled-components";
import Input from "./Input";
import MonthSelect from "./MonthSelect";
import InputLabel from "./InputLabel";
import TermsConditions from "./TermsConditions";
import SubmitButton from "./SubmitButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 1024px) {
    padding-bottom: 50px;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding: 0 30px 47px;
  font-family: Town10Display;
  font-size: 24.5px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #f26522;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Display = ({ updateUser, ...props }) => {
  return (
    <Form>
      <Title>CADASTRO</Title>

      <Group>
        <InputLabel htmlFor="email">Qual seu email?</InputLabel>
        <Input id="email" name="email" type="email" onInput={updateUser} />
      </Group>

      <Group>
        <InputLabel htmlFor="email-confirm">Confirme seu email</InputLabel>
        <Input
          id="email-confirm"
          name="email_confirm"
          type="email"
          onInput={updateUser}
        />
      </Group>

      <Group>
        <InputLabel htmlFor="password">Crie a sua senha</InputLabel>
        <Input
          id="password"
          name="password"
          type="password"
          onInput={updateUser}
        />
      </Group>

      <Group>
        <InputLabel htmlFor="password-confirm">Confirme a sua senha</InputLabel>
        <Input
          id="password-confirm"
          name="password_confirm"
          type="password"
          onInput={updateUser}
        />
      </Group>

      <Group>
        <InputLabel htmlFor="name">
          Como sua pessoa quer ser chamada?
        </InputLabel>
        <Input id="name" name="name" type="text" onInput={updateUser} />
      </Group>

      <Group>
        <InputLabel htmlFor="city">Em qual cidade do DF você mora?</InputLabel>
        <Input id="city" name="city" type="text" onInput={updateUser} />
      </Group>

      <Group>
        <InputLabel>Qual da data do seu nascimento?</InputLabel>
        <Row>
          <Input
            id="day"
            name="day"
            type="text"
            maxlength="2"
            pattern="((0?[1-9])|([12][0-9])|(3[01]))"
            width="28%"
            onInput={updateUser}
          />
          <MonthSelect
            id="month"
            name="month"
            width="40%"
            onInput={updateUser}
          />
          <Input
            id="year"
            name="year"
            type="text"
            maxlength="4"
            pattern="(19[0-9]{2})|(200)[0-4]"
            step="1"
            width="28%"
            onInput={updateUser}
          />
        </Row>
      </Group>

      <Group>
        <InputLabel htmlFor="phone">Quer nos passar seu Whatsapp?</InputLabel>
        <Input id="phone" name="phone" type="tel" onInput={updateUser} />
      </Group>

      <TermsConditions />

      <SubmitButton />
    </Form>
  );
};

export default Display;
