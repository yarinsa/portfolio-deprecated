import React from "react";
import styled from "styled-components/macro";
import { Icon } from "@blueprintjs/core";
import theme from "../../../theme/theme.module.scss";

interface ProjectImageUpload {
  onUpload: CallableFunction;
  images: string[];
}
export const ProjectImageUpload: React.FC<ProjectImageUpload> = ({
  images,
  onUpload,
}) => {
  return (
    <ImagesContainer>
      <label htmlFor="upload">
        <input
          type="file"
          accept="image/*,.svg"
          id="upload"
          value=""
          onChange={(event) => onUpload(event)}
        />
        <Icon icon="upload" />
      </label>
      {images.map((image, index) => (
        <img src={image} alt={index + ""} key={index} />
      ))}
    </ImagesContainer>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 10px;
  color: #666;
  > * {
    width: 150px;
    height: 150px;
    object-fit: cover;
    background-color: #e5e5e5;
    border-radius: 6px;
    margin-right: 10px;
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: ${theme.primaryColor};
    }
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;
