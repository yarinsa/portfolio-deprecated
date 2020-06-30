import React, { useEffect } from "react";
import { Dialog, Classes, Button, H3 } from "@blueprintjs/core";
import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import theme from "../theme/theme.module.scss";
import { TechnologyBox } from "./TechnologyBox";

interface WorkItemDialogProps {
  isOpen: boolean;
  toggle: CallableFunction;
}

export const WorkItemDialog: React.FC<WorkItemDialogProps> = ({
  isOpen,
  toggle,
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
    console.log("hey");
  };

  return (
    <Dialog
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      isOpen={isOpen}
      title="Watermelon Market"
      isCloseButtonShown={false}
    >
      <Body className={Classes.DIALOG_BODY}>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          excepturi sunt. Sapiente est quam, amet laboriosam qui non doloribus
          illo perferendis, voluptatibus nihil vel at error repellendus porro!
          Iure, nemo.
        </Description>
        <GalleryContainer>
          <ImageGallery />
        </GalleryContainer>
        <Paragraph>
          <ParagraphTitle>What is special about this project?</ParagraphTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis, nisi? Suscipit aspernatur sed accusantium veritatis
            laborum corrupti sit harum officiis molestias odit eveniet, sint
            veniam, dignissimos unde. Saepe, accusamus magni.
          </p>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Technologies I used:</ParagraphTitle>
          <TechnologiesList>
            <TechnologyBox
              image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png"
              name="Mongo DB"
            />
            <TechnologyBox
              image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png"
              name="Amazon Cloud Service"
            />
            <TechnologyBox
              image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png"
              name="Mongo DB"
            />
            <TechnologyBox
              image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png"
              name="Node.JS"
            />
          </TechnologiesList>
        </Paragraph>
      </Body>
      <Footer className={Classes.DIALOG_FOOTER}>
        <Button text="Visit" intent="primary" icon="globe-network" />
        <Button text="Code" icon="code" />
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
  font-size: 12px;
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
  font-size: 14px;
  line-height: 19px;
  margin: 5px 0;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;
