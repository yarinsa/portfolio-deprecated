import React from "react";
import styled from "styled-components";
import { H1, Card as BPCard } from "@blueprintjs/core";
import { ReactComponent as DesignerIcon } from "../assets/icons/designer.svg";
import { ReactComponent as DeveloperIcon } from "../assets/icons/developer.svg";
import { Card } from "../components/Card";

export const About: React.FC<{}> = ({}) => {
  return (
    <Root>
      <Card
        title="Hi, I'm Yarin. Nice to meet you."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque ex dolor autem dolore explicabo, modi blanditiis dignissimos excepturi temporibus tempora eius quaerat sequi corporis fuga vitae nostrum dolorem eveniet."
      />
      <Card
        title="Fullstack Developer"
        icon={<DeveloperIcon />}
        description="I like to code things from scratch, and enjoy bringing ideas to life."
        tableColumnLeft={{
          header: "Languages I speak:",
          content: "HTML, CSS, SASS, TypeScript, JavaScript (ES6), PHP",
        }}
        tableColumnRight={{
          header: "Technologies & Frameworks:",
          content: `Node.JS, React,
          Vue.JS,
          Angular,
          MongoDB,
          REST API,
          graphQL,
          socket.io, `,
        }}
      />
      <Card
        title="Designer"
        icon={<DesignerIcon />}
        description="I value simple content structure, clean design patterns, and
          thoughtful interactions."
        tableColumnLeft={{
          header: "Things I enjoy designing:",
          content: "UX, UI, Web, Mobile, Apps, Social Media",
        }}
        tableColumnRight={{
          header: "My Tools:",
          content: "Figma, Photoshop, Pen & Paper",
        }}
      />
    </Root>
  );
};

const Root = styled.main`
  display: flex;
  flex-direction: column;
`;

const Title = styled(H1)`
  margin-bottom: 20px;
  font-weight: 600px;
`;
