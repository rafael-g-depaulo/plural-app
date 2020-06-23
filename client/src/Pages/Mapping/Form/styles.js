import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  #columnOut {
    display: flex;
    flex-direction: column;
    margin-top: -4px;

    @media (min-width: 500px) {
      display: flex;
      flex-direction: column;
      margin-top: -22px;
      max-width: 100%;
    }
  }

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: Town Display;
  font-size: 25px;
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
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;

  @media (max-width: 350px) {
    display: flex;
    margin-bottom: 8px;
    font-size: 14px;
  }

  cursor: pointer;

  @media (min-width: 500px) {
    padding: 0 30px 0px 30px;
    font-size: 22px;
  }
`;

export const Checkbox = styled.input`
  margin-right: 3%;

  @media (max-width: 500px) {
    padding: 0 30px 0px 30px;
    font-size: 28px;
  }
`;
