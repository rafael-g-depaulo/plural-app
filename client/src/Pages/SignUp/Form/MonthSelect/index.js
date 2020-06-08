import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 20px 30px;
  font-family: Town80Text;
  font-size: 24.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 50px;
  appearance: none;

  width: ${(props) => props.width || "100%"};

  &:focus {
    outline: none;
  }
`;

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const Select = ({ ...props }) => {
  return (
    <StyledSelect {...props} defaultValue="">
      <option disabled value=""></option>
      {months.map((monthName, index) => (
        <option value={index} key={index}>
          {monthName}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
