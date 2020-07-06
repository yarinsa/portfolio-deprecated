import React from "react";
import { ProjectList } from "../components/Projects/ProjectList";

export const Projects: React.FC<{}> = () => {
  return (
    <div>
      Here are a few design projects I've worked on recently.
      <ProjectList />
    </div>
  );
};

export interface IWorkItem {
  name: string;
  description: string;
  stack: string[];
  challenges: string;
  special: string;
  images: string[];
}
