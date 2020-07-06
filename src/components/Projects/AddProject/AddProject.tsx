import React, { useState } from "react";
import styled from "styled-components";
import {
  FormGroup,
  Button,
  InputGroup,
  TextArea,
  Icon,
} from "@blueprintjs/core";
import theme from "../../../theme/theme.module.scss";
import {
  CreateProjectInput,
  ParagraphInput,
  CreateTechnologyInput,
} from "../../../API";
import { Storage, graphqlOperation, API } from "aws-amplify";
import { ParagraphCreate } from "../../ParagraphCreate";
import { createProject } from "../../../graphql/mutations";
import { ProjectImageUpload } from "./ProjectImageUpload";
import { Toaster } from "../../Toaster";
import { TechnologySelect } from "../../Technologies/TechnologySelect";

export const AddProject: React.FC<{}> = ({}) => {
  const [project, setProject] = useState<CreateProjectInput>({
    additionalText: [],
    description: "",
    git: "",
    images: [],
    name: "",
    url: "",
    technologies: [],
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;
    const file = (element.files as FileList)[0];
    if (project.name !== "") {
      Storage.put(
        `projects/${project.name}/${project.images.length}.png`,
        file,
        {
          contentType: "image/png",
        }
      )
        .then((uploadedImageObj: any) => {
          Toaster.show({
            intent: "success",
            message: "Image Uploaded Successfully",
            icon: "confirm",
          });
          const newProject = { ...project };
          if (uploadedImageObj.key) {
            newProject.images.push(uploadedImageObj.key);
            setProject(newProject);
            fetchImages(project.images);
          }
        })
        .catch((error) => {
          Toaster.show({
            intent: "danger",
            message: "There was problem uploading the picture: " + error,
            icon: "error",
          });
        });
    }
  };

  //PLEASE make sure that the input id is matching the state object field.
  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setProject({ ...project, [event.target.id]: event.target.value });
  };

  const handleParagraph = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newProject = { ...project };
    event.target.id === "header"
      ? (newProject.additionalText[index]["header"] = event.target.value)
      : (newProject.additionalText[index]["content"] = event.target.value);
    setProject(newProject);
  };

  const onRemoveParagraph = (index: number) => {
    const newProject = { ...project };
    newProject.additionalText.splice(index, 1);
    setProject(newProject);
  };

  const fetchImages = (imagesKeys: string[]) => {
    Promise.all(
      project.images.map(async (image, index) => {
        return await Storage.get(image).then((result) => {
          const joined = uploadedImages.concat(result + "");
          setUploadedImages(joined);
          return result;
        });
      })
    );
  };

  const handleTechnologySelect = (
    selectedTechnologies: CreateTechnologyInput[]
  ) => {
    const technologiesId = selectedTechnologies.map(({ id }) => id);
    setProject({
      ...project,
      technologies: technologiesId,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      await API.graphql(graphqlOperation(createProject, { input: project }));
      Toaster.show({
        intent: "success",
        message: "Project Successfully Added",
        icon: "confirm",
      });
    } catch (error) {
      Toaster.show({
        intent: "danger",
        message: "There was problem saving the project: " + error,
        icon: "error",
      });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Add Project</Title>
      <FormGroup label="Name" labelFor="name">
        <InputGroup required id="name" onChange={handleInput} />
      </FormGroup>
      <FormGroup label="Description" labelFor="description">
        <TextArea
          required
          growVertically={true}
          id="description"
          fill
          large={true}
          onChange={handleInput}
        />
      </FormGroup>

      <Url label="URL" labelFor="url">
        <InputGroup required id="url" onChange={handleInput} />
      </Url>
      <Git label="Git" labelFor="git">
        <InputGroup required id="git" onChange={handleInput} />
      </Git>
      <ProjectImageUpload images={uploadedImages} onUpload={handleUpload} />
      <FormGroup label="Technologies" labelFor="tech">
        <TechnologySelect onSelect={handleTechnologySelect} />
      </FormGroup>

      {project.additionalText.map((paragraph: ParagraphInput, index) => {
        return (
          <ParagraphCreate
            key={index}
            index={index}
            {...paragraph}
            onInput={handleParagraph}
            onRemove={onRemoveParagraph}
          />
        );
      })}
      <Note
        onClick={() => {
          const newProject = { ...project };
          newProject.additionalText.push({
            content: "",
            header: "",
          });
          setProject(newProject);
        }}
      >
        Add Additional Paragraph
      </Note>
      <Submit type="submit" text="Add" intent="primary" icon="add" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const Title = styled.h1`
  margin: 10px 0;
`;

const Url = styled(FormGroup)`
  max-width: 250px;
`;

const Git = styled(FormGroup)`
  max-width: 250px;
`;

const Note = styled.small`
  color: ${theme.primaryColor};
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
`;

const Submit = styled(Button)`
  width: 200px;
  margin-left: auto;
`;
