import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const Text = styled.p`
  font-family: "Town Text";
  font-weight: 900;
  font-size: 2em;
  color: #000;
  text-align: center;

  span {
    font-size: 0.7em;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const CloseButton = styled.a`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -6px;
  top: -6px;
  font-size: 24px;
  background: #ccc;
  border-radius: 18px;
  border: 1px solid #cfcece;
`;

const Default = () => 
  (
    <Text>
      Desculpe, tivemos um problema!
      <br />
      <span>Por favor, tente novamente mais tarde.</span>
    </Text>
  )

export const PopUp = ({
  children,
  ...props
}) => {
  return (
    <Popup
      open={props.open}
      modal
      contentStyle={{
        background: "#fff",
        borderRadius: "30px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#ccc",
        width: "500px",
      }}
    >
      {(close) => (
        <>
          <CloseButton onClick={close}>&times;</CloseButton>
          { children ?? <Default />}
        </>
      )}
    </Popup>
  );
};

export default PopUp;
