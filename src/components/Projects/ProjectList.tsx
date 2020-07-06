import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProjectListItem } from "./ProjectListItem";
import { CreateProjectInput } from "../../API";
import { graphqlOperation, API } from "aws-amplify";
import { listProjects } from "../../graphql/queries";
import { Toaster } from "../Toaster";
import { ProjectDialog } from "./ProjectDialog";
import { imageKeysToUrls } from "../../api/aws.service";

interface ProjectListProps {
  limit?: number;
}

export const ProjectList: React.FC<ProjectListProps> = ({ limit }) => {
  const [projectsListItems, setProjectsListItems] = useState<
    CreateProjectInput[]
  >([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CreateProjectInput>({
    additionalText: [],
    description: "",
    git: "",
    images: [],
    name: "",
    url: "",
    technologies: [],
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsList: any = API.graphql(graphqlOperation(listProjects));
        projectsList.then((result: any) => {
          setProjectsListItems(result.data.listProjects.items);
          fetchImages(result.data.listProjects.items);
        });
        //end of if
      } catch (error) {
        //end of try
        Toaster.show({
          intent: "danger",
          icon: "error",
          message: "There was problem retrieving projects",
        });
      }
    };

    const fetchImages = async (projects: CreateProjectInput[]) => {
      projects.map(async (project, projectIndex) => {
        let urls = await imageKeysToUrls(projects[projectIndex].images);
        const newProject = projects[projectIndex];
        newProject.images = newProject.images.map((image, index) => {
          return urls[index] + "";
        });
        projectsListItems.splice(projectIndex, 1, newProject); // end of splice
        setProjectsListItems(projectsListItems);

        //forcing re-render after loading the image
        setSelectedItem(projectsListItems[projectIndex]);

        renderList();
      }); //end of project list map
    }; //end of fetch images

    fetchProjects();
  }, []);

  const OnListItemClick = (index: number) => {
    setSelectedItem(projectsListItems[index]);
    setIsDialogOpen(true);
  };

  const renderList = () => {
    return projectsListItems.map((project, index) => {
      if (limit && index >= limit) return;
      return (
        <div key={index} onClick={() => OnListItemClick(index)}>
          <ProjectListItem key={index} {...project} />
        </div>
      );
    });
  };

  return (
    <Root>
      {renderList()}
      <ProjectDialog
        isOpen={isDialogOpen}
        toggle={setIsDialogOpen}
        {...selectedItem}
      />
    </Root>
  );
};

const Root = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 30px 10px;
`;
