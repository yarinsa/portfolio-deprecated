import React, { useState } from "react";
import { WorkList } from "../components/WorkList";
import { WorkItemDialog } from "../components/WorkItemDialog";
import styled from "styled-components";

export const Work: React.FC<{}> = ({}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <Title>My Recent Work</Title>
      <p>
        Here are a few design projects I've worked on recently. Want to see
        more?
      </p>
      <WorkList toggleDialog={setIsDialogOpen} />
      <WorkItemDialog isOpen={isDialogOpen} toggle={setIsDialogOpen} />
    </div>
  );
};

const Title = styled.h1`
  margin: 0 0 10px 0;
`;

export interface IWorkItem {
  name: string;
  description: string;
  stack: string[];
  challenges: string;
  special: string;
  images: string[];
}
