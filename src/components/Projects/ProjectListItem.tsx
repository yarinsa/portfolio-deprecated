import React from "react";
import { Card as BPCARD } from "@blueprintjs/core";
import styled from "styled-components/macro";
import { CreateProjectInput } from "../../API";
import theme from "../../theme/theme.module.scss";

interface ProjectListItemProps extends CreateProjectInput {}
export const ProjectListItem: React.FC<ProjectListItemProps> = ({
  additionalText,
  description,
  git,
  images,
  name,
  url,
}) => {
  return (
    <Card background={images[0]} elevation={0}>
      <CardOverlay>
        <CaptionTitle>{name}</CaptionTitle>
        <CardCaption>{description}</CardCaption>
      </CardOverlay>
    </Card>
  );
};

const Card = styled(BPCARD)<{ background: string }>`
  height: 200px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 1px rgba(42, 2, 64, 0.1), 0 2px 4px rgba(62, 1, 76, 0.2),
      0 8px 24px rgba(51, 2, 76, 0.2);
  }
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
`;

const CardOverlay = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.25s ease-in-out;
  background-color: #141c3a;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover {
    opacity: 0.8;
  }
`;
const CardCaption = styled.p`
  padding: 10px;
  color: #fff;

  text-overflow: ellipsis;
  overflow: hidden;
`;

const CaptionTitle = styled.h3`
  color: ${theme.primaryColor};
  background-color: ${theme.backgroundColor};

  font-family: SF-UI-Text-Bold;
  font-style: normal;
  font-size: 18px;
  padding: 5px 0;
  margin: 0 0 10px 0;
  opacity: 1;
  text-align: center;
`;
