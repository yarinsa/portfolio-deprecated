import React, { useState } from "react";
import styled from "styled-components";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { CreateTechnologyInput } from "../../API";
import { InputGroup, Button, Icon, Card, H2 } from "@blueprintjs/core";
import { createTechnology } from "../../graphql/mutations";
import theme from "../../theme/theme.module.scss";
import { Toaster } from "../Toaster";

export const AddTechnology: React.FC<{}> = () => {
  const [technology, setTechnology] = useState<CreateTechnologyInput>({
    id: "",
    image: "",
    name: "",
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (technology.name.length < 2) return;
    Storage.put(`technologies/${createId(technology.name)}.png`, uploadedFile, {
      contentType: "image/png",
    })
      .then((uploadedImage: any) => {
        return uploadedImage.key;
      })
      .then(async (imageKey) => {
        return { ...technology, image: imageKey };
      })
      .then(async (technologyWithImageKey) => {
        await API.graphql(
          graphqlOperation(createTechnology, {
            input: technologyWithImageKey,
          })
        );
        Toaster.show({
          intent: "success",
          message: "Technology Successfully Added",
          icon: "confirm",
        });
        setTechnology(technologyWithImageKey);
      })
      .catch((error) => {
        Toaster.show({
          intent: "danger",
          message: "There was problem saving the project: " + error,
          icon: "error",
        });
      });
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTechnology({
      ...technology,
      [event.target.id]: event.target.value,
      id: createId(event.target.value),
    });
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files: FileList | null = event.target.files;
    if (files !== null) {
      setUploadedFile(files[0]);
    }
  };

  const createId = (technologyName: string) => {
    return technologyName.toUpperCase().replace(/[^a-zA-Z0-9]+/g, "-");
  };

  return (
    <Root>
      <Form onSubmit={onSubmit}>
        <H2>Add Technology</H2>
        <NameUploadContainer>
          <InputGroup
            placeholder="Name"
            required
            id="name"
            onChange={handleInput}
          />

          <UploadImage htmlFor="upload-tech-img">
            <input
              type="file"
              accept="image/png"
              id="upload-tech-img"
              onChange={(event) => handleUpload(event)}
            />
            <Icon icon="cloud-upload" /> <span>Upload Image</span>
          </UploadImage>
        </NameUploadContainer>
        <Button
          text={"Add " + technology.id}
          type="submit"
          intent="primary"
        ></Button>
      </Form>
    </Root>
  );
};

const Root = styled(Card)`
  max-width: 250px;
  h2 {
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > * {
  }
`;

const NameUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 15px;
  }
  margin-bottom: 25px;
`;

const UploadImage = styled.label`
  input {
    display: none;
  }
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 0;
  color: #999;
  &:hover {
    color: ${theme.primaryColor};
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;
