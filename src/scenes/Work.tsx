import React, { useState, useEffect } from "react";
import { WorkList } from "../components/WorkList";
import { WorkItemDialog } from "../components/WorkItemDialog";
import styled from "styled-components";
import gql from "graphql-tag";
import { listProjects, listTechnologys } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { API, graphqlOperation } from "aws-amplify";
import { createTechnology, createProject } from "../graphql/mutations";
import {
  CreateTechnologyInput,
  ParagraphInput,
  CreateProjectInput,
} from "../API";

export const Work: React.FC<{}> = ({}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const restApi: CreateTechnologyInput = {
        id: "RESTI",
        name: "Rest API",
        image: "image.jpg",
      };
      const p: ParagraphInput[] = [
        {
          header: "This is very special header!",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime iure molestiae aut voluptates eum eaque laudantium adipisci obcaecati autem quia.",
        },
      ];
      const project: CreateProjectInput = {
        git: "Link-to-git-hub.com",
        name: "worldwider",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas quidem vero molestias officia praesentium, ut ex facilis voluptatum dolorum dolor, eum quo velit. Obcaecati earum eveniet modi officia nemo.",
        images: ["1.jpg", "2.jpg"],
        additionalText: p,
        url: "worldwider.com",
      };
      try {
        // const technologiesList: any = await API.graphql(
        //   graphqlOperation(listTechnologys)
        // );
        // const newProject: any = await API.graphql(
        //   graphqlOperation(createProject, { input: project })
        // );
        // const projectsList: any = await API.graphql(
        //   graphqlOperation(listProjects)
        // );
        // // console.log(result);
        // console.log(technologiesList);
        // console.log(newProject);
        // console.log(projectsList);
        // setProjects(projectsList);
      } catch (error) {
        console.log(error.errors);
      }
      // setProjects(result.data?.listProjects.items);
    };

    fetchProjects();
  }, []);

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
