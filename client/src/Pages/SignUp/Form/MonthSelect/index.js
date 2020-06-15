import React from "react";
import styled from "styled-components";
import { inputFontSize } from "Themes/default";

const StyledSelect = styled.select`
  padding: 15px 20px;
  font-family: Town Text;
  font-size: ${inputFontSize}px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 50px;
  appearance: none;

  color: ${(props) => props.color || "#ffffff"};
  width: ${(props) => props.width || "100%"};

  &:focus {
    outline: none;
  }

  @media (min-width: 500px) {
    padding: 15px 30px;
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
      <option disabled value="" hidden />
      {months.map((monthName, index) => (
        <option value={index} key={index}>
          {monthName}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
