import React from "react";
import styled from "styled-components";
import FormattedInput from "react-number-format";
import Input from "./Input";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import MonthSelect from "./MonthSelect";
import TermsConditions from "./TermsConditions";
import SubmitButton from "./SubmitButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding: 0 100px 47px 20px;
  font-family: Town Display;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #f26522;

  @media (min-width: 500px) {
    padding: 0 100px 47px 30px;
    font-size: 24.5px;
  }
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

export const Display = ({
  user,
  errors,
  onSubmit,
  updateUser,
  updateUserFormattedInput,
  ...props
}) => {
  return (
    <Form onSubmit={onSubmit} autocomplete="off">
      <Title>CADASTRO</Title>

      <Group>
        <InputLabel htmlFor="email">Qual seu email?</InputLabel>
        <Input id="email" name="email" type="email" defaultValue={user.email} onInput={updateUser} />
        {errors.email && <InputError>{errors.email}</InputError>}
      </Group>

      <Group>
        <InputLabel htmlFor="email-confirm">Confirme seu email</InputLabel>
        <Input
          id="email-confirm"
          name="email_confirm"
          type="email"
          onInput={updateUser}
        />
        {errors.email_confirm && (
          <InputError>{errors.email_confirm}</InputError>
        )}
      </Group>

      <Group>
        <InputLabel htmlFor="password">Crie a sua senha</InputLabel>
        <Input
          id="password"
          name="password"
          type="password"
          onInput={updateUser}
        />
        {errors.password && <InputError>{errors.password}</InputError>}
      </Group>

      <Group>
        <InputLabel htmlFor="password-confirm">Confirme a sua senha</InputLabel>
        <Input
          id="password-confirm"
          name="password_confirm"
          type="password"
          onInput={updateUser}
        />
        {errors.password_confirm && (
          <InputError>{errors.password_confirm}</InputError>
        )}
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
          <FormattedInput
            customInput={Input}
            onValueChange={(values) => {
              const { formattedValue } = values;
              updateUserFormattedInput("day", formattedValue);
            }}
            format="##"
            isNumericString={true}
            id="day"
            name="day"
            type="tel"
            width="28%"
          />
          <MonthSelect
            id="month"
            name="month"
            onInput={updateUser}
            width="40%"
          />
          <FormattedInput
            customInput={Input}
            onValueChange={(values) => {
              const { formattedValue } = values;
              updateUserFormattedInput("year", formattedValue);
            }}
            format="####"
            isNumericString={true}
            id="year"
            name="year"
            type="tel"
            width="28%"
          />
        </Row>
        {errors.day && <InputError>{errors.day}</InputError>}
        {errors.year && <InputError>{errors.year}</InputError>}
      </Group>

      <Group>
        <InputLabel htmlFor="phone">
          Quer nos passar seu Whatsapp? (opcional)
        </InputLabel>
        <FormattedInput
          customInput={Input}
          onValueChange={(values) => {
            const { formattedValue } = values;
            updateUserFormattedInput("phone", formattedValue);
          }}
          format="(##) #####-####"
          isNumericString={true}
          mask="_"
          id="phone"
          name="phone"
          type="tel"
        />
      </Group>

      <TermsConditions />

      <SubmitButton />
    </Form>
  );
};

export default Display;
