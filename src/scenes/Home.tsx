import React from "react";
import { Tabs } from "../components/Tabs";
import { H1 } from "@blueprintjs/core";
import styled from "styled-components";
import theme from "../theme/theme.module.scss";

export const Home: React.FC<{}> = ({}) => {
  return (
    <main>
      <Title>Yarin Sasson</Title>
      <Subtitle>Fullstack Developer</Subtitle>
      <Subtitle>& Graphic Designer</Subtitle>
      <Paragraph>
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
        dolorem"
      </Paragraph>
    </main>
  );
};

const Title = styled.h1`
  font-family: "New-York";
  color: ${theme.primaryColor};
  font-size: 84px;
  font-weight: 100;
  margin: 0;
`;

const Subtitle = styled.h1`
  font-weight: 100;
  margin: 0;
  font-size: 42px;
  font-family: SF-Pro-Rounded;
  :nth-child(3) {
    padding-left: 40px;
  }
`;

const Paragraph = styled.p`
  font-family: New-York;
  color: ${theme.primaryColor};
  font-size: 24px;
  margin: 0;
  margin-top: 60px;
  font-style: italic;
  text-align: center;
  padding: 20px;
  opacity: 0.8;
`;
