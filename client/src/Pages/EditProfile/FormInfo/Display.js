import React from "react";
import styled from "styled-components";
import FormattedInput from "react-number-format";
import Input from "./Input";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import MonthSelect from "./MonthSelect";
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
  padding: 0 100px 30px 20px;
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
    padding: 0 100px 30px 30px;
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
      <Title>EDITAR DADOS</Title>

      <Group>
        <InputLabel htmlFor="name">
          Como sua pessoa quer ser chamada?
        </InputLabel>
        <Input
          id="name"
          name="name"
          value={user.name}
          type="text"
          onChange={updateUser}
        />
        {errors.name && <InputError>{errors.name}</InputError>}
      </Group>

      <Group>
        <InputLabel htmlFor="city">Em qual cidade do DF você mora?</InputLabel>
        <Input
          id="city"
          name="city"
          value={user.city}
          type="text"
          onChange={updateUser}
        />
        {errors.city && <InputError>{errors.city}</InputError>}
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
            value={user.day}
            type="tel"
            width="28%"
          />
          <MonthSelect
            id="month"
            name="month"
            onChange={updateUser}
            defaultValue={user.month}
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
            value={user.year}
            type="tel"
            width="28%"
          />
        </Row>
        {errors.day && <InputError>{errors.day}</InputError>}
        {errors.month && <InputError>{errors.month}</InputError>}
        {errors.year && <InputError>{errors.year}</InputError>}
      </Group>

      <Group>
        <InputLabel htmlFor="phone_number">Celular</InputLabel>
        <FormattedInput
          customInput={Input}
          onValueChange={(values) => {
            const { formattedValue } = values;
            updateUserFormattedInput("phone_number", formattedValue);
          }}
          format="(##) #####-####"
          mask="_"
          id="phone_number"
          name="phone_number"
          value={user.phone_number}
          type="tel"
        />
        {errors.phone_number && <InputError>{errors.phone_number}</InputError>}
      </Group>

      <SubmitButton />
    </Form>
  );
};

export default Display;
