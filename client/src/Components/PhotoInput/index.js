import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { labelFontSize } from "Themes/default";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const Label = styled.label`
  font-family: Town Text;
  font-size: ${labelFontSize}px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 500px) {
    font-size: 12px;
  max-width: 30%;
  }
  justify-content: center !important;
  align-items: center !important;
`;

const HiddenInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const StyledInput = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.width || "unset"};
  height: ${(props) => props.height || "unset"};
  padding: 30px;
`;

const Icon = styled(PhotoCameraIcon)`
  margin-top: 10px;
  width: 100px !important;
  height: 100px !important;
`;

const PhotoPreview = styled.img`
  margin-top: 10px;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const Input = ({ onFileChange = () => {}, ...props }) => {
  const [file, setFile] = useState(undefined);

  // update parent when file changes
  useEffect(() => {
    onFileChange(file);
  }, [file, onFileChange]);

  const readFile = useCallback((event) => {
    let files = event.target.files;

    // get files[0] because user could select multiple files
    if (files && files[0]) {
      setFile(files[0]);
    }
  }, []);

  return (
    <Label htmlFor="photo">
      <HiddenInput
        type="file"
        name="photo"
        id="photo"
        accept="image/*"
        onChange={readFile}
      />
      <StyledInput {...props}>
        <span>{file ? "Foto escolhida" : "Toque para enviar foto"}</span>
        {file ? (
          <PhotoPreview src={URL.createObjectURL(file)} alt="Foto" />
        ) : (
          <Icon />
        )}
      </StyledInput>
    </Label>
  );
};

export default Input;
