import React, { useEffect } from "react";
import { Dialog, Classes, Button } from "@blueprintjs/core";
import styled from "styled-components";
import { ProjectImageGallery } from "./ProjectImageGallery";
import theme from "../../theme/theme.module.scss";
import { CreateProjectInput } from "../../API";
import { TechnologyList } from "../Technologies/TechnologyList";

interface ProjectDialogProps extends CreateProjectInput {
  isOpen: boolean;
  toggle: CallableFunction;
}

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
  isOpen,
  toggle,
  additionalText,
  description,
  git,
  images,
  name,
  url,
  technologies,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKey, false);
    document.addEventListener("click", handleKey, false);

    // Clean up event listener between renders!
    return function cleanup() {
      document.removeEventListener("click", handleKey, false);
      document.removeEventListener("keydown", handleKey);
    };
  });

  const handleKey = (event: KeyboardEvent | MouseEvent) => {
    if (event instanceof KeyboardEvent && event.key === "Escape") toggle(false);
    if (event instanceof MouseEvent) {
      const target = event.target as HTMLElement;
      if (typeof target.className === "string") {
        if (target.className.includes("overlay")) toggle(false);
      }
    }
  };

  return (
    <Dialog
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      isOpen={isOpen}
      title={name}
      onClose={() => toggle(false)}
      isCloseButtonShown={true}
    >
      <Body className={Classes.DIALOG_BODY}>
        <Description>{description}</Description>
        <GalleryContainer>
          <ProjectImageGallery images={images} />
        </GalleryContainer>
        {additionalText.map((paragraph, index) => (
          <Paragraph key={index}>
            <ParagraphTitle key={index}>{paragraph.header}</ParagraphTitle>
            <p>{paragraph.content}</p>
          </Paragraph>
        ))}

        <Paragraph>
          <ParagraphTitle>Technologies I used:</ParagraphTitle>
          <TechnologyList technologies={technologies} />
        </Paragraph>
      </Body>
      <Footer className={Classes.DIALOG_FOOTER}>
        <a href={url}>
          <Button text="Visit" intent="primary" icon="globe-network" />
        </a>
        <a href={git}>
          {" "}
          <Button text="Code" icon="code" />
        </a>
      </Footer>
    </Dialog>
  );
};

const Body = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  &-item {
    position: relative;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  & button {
    margin-left: 10px;
  }
`;

const GalleryContainer = styled.div`
  min-width: 250px;
`;

const Description = styled.p`
  margin: 10px 0 20px 0;
`;

const Paragraph = styled.div`
  font-size: 15px;
  margin: 10px;

  p {
    margin: 0;
  }
`;

const ParagraphTitle = styled.h3`
  color: ${theme.primaryColor};

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  margin: 5px 0;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;
