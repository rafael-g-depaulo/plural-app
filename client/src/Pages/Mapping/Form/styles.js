import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  #columnOut {
    display: flex;
    flex-direction: column;

    @media (min-width: 500px) {
      margin-top: -40px;
    }
  }

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: Town Display;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #f79b4a;

  @media (min-width: 500px) {
    padding: 0 20px 30px 30px;
    font-size: 33px;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 18px;
  font-family: Town Display;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #f79b4a;

  @media (min-width: 500px) {
    padding: 0 20px 0px 30px;
    font-size: 26px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;

  @media (max-width: 500px) {
    padding-bottom: 5px;
    max-width: 90%;
  }
`;

export const GroupOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    max-width: 90%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  inline-size: 100%;

  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const GroupName = styled.h2`
  margin-top: 18px;
  font-family: Town Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;

  @media (min-width: 500px) {
    padding: 0 50px 0px 30px;
    font-size: 22px;
  }
`;

export const CheckboxLabel = styled.label`
  font-family: Town Text;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  padding-top: 18px;
  color: #ffffff;

  @media (max-width: 350px) {
    display: flex;
    margin-bottom: 8px;
    font-size: 14px;
  }

  cursor: pointer;

  @media (min-width: 500px) {
    padding: 0 30px 0px 30px;
    font-size: 18px;
  }
`;

export const Checkbox = styled.input`
  margin-right: 3%;

  @media (max-width: 500px) {
    padding: 0 30px 0px 30px;
    font-size: 28px;
  }
`;

export const StyledCheckbox = styled.span`
  position: absolute;
  top: 5px;
  left: 0;
  height: 20px;
  width: 20px;
  color: #ffffff;
  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 50%;

  ${CheckboxLabel}:hover & {
    background-color: #222222;
  }

  //Checked dot
  ${Checkbox}:checked + & {
    &:after {
      display: block;
      content: "";
      position: absolute;
      left: 3px;
      top: 3px;
      width: 10px;
      height: 10px;
      background-color: #ffffff;
      border-radius: 50%;
    }
  }
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Text = styled.text`
  font-family: Town Text;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;

  @media (max-width: 350px) {
    display: flex;
    margin-bottom: 8px;
    font-size: 14px;
  }

  @media (min-width: 500px) {
    padding: 0 30px 30px 30px;
    font-size: 18px;
  }
`;
