import React from "react";
import styled from "styled-components";
import { AddTechnology } from "./AddTechnology";
import { TechnologyList } from "./TechnologyList";
import { H4 } from "@blueprintjs/core";

export const TechnologiesPanel: React.FC<{}> = () => {
  return (
    <Root>
      <AddTechnology />
      <div>
        <H4>Technologies:</H4>
        <TechnologyList />
      </div>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  > * {
    margin-right: 30px;
  }
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    > * {
      margin-bottom: 20px;
    }
  }
`;
