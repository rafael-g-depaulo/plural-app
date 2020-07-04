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
  margin-bottom: 15px;

  @media (max-width: 500px) {
    margin-bottom: 5px;
    /* max-width: 90%; */
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

export const ContainerJobs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  inline-size: 100%;

  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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

export const ContainerInput = styled.div`
  padding-left: 30px;
  padding-bottom: 28px;
  padding-right: 30px;
  padding-top: 10px;

  @media (min-width: 500px) {
    padding-right: 42px;
  }
`;

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  font-family: Town Text;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  padding-top: 18px;
  user-select: none;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 350px) {
    display: flex;
    font-size: 14px;
  }

  @media (min-width: 500px) {
    padding: 0 30px 0px 30px;
    font-size: 18px;
  }
`;

export const Input = styled.input.attrs()`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckbox = styled.span`
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  color: #ffffff;
  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 50%;

  ${Label}:hover & {
    background-color: #222222;
  }

  //Checked dot
  ${Input}:checked + & {
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

export const Text = styled.span`
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
    margin: 0 0 15px 0;
    font-size: 18px;
  }
`;
