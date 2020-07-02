import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { CreateTechnologyInput } from "../API";
import { InputGroup } from "@blueprintjs/core";
import { createTechnology } from "../graphql/mutations";

export const AddTechnology: React.FC<{}> = ({}) => {
  const [technology, setTechnology] = useState<CreateTechnologyInput>({
    id: "",
    image: "",
    name: "",
  });

  const onSumbit = async () => {
    try {
      const newProject: any = await API.graphql(
        graphqlOperation(createTechnology, { input: technology })
      );
    } catch (error) {
      console.log(error.errors);
    }
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTechnology({
      ...technology,
      [event.target.id]: event.target.value,
      id: event.target.value.toUpperCase(),
    });
  };

  const handleUpload = (selectorFiles: FileList | null) => {
    if (selectorFiles !== null) {
      const file = selectorFiles[0];
      console.log(file);
      Storage.put("example.png", file, {
        contentType: "image/png",
      })
        .then((uploadedImageUrl) => {
          const technologyWithImage = { uploadedImageUrl, ...technology };
          console.log(technologyWithImage);
          setTechnology(technologyWithImage);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Root>
      <h1>Add Technology</h1>
      <input
        type="file"
        accept="image/png"
        onChange={(evt) => handleUpload(evt.target.files)}
      />
      <InputGroup
        placeholder="Name"
        required
        id="name"
        onChange={handleInput}
      />
      <Id>{technology.name}</Id>
      <button onClick={() => onSumbit()}>Add</button>
    </Root>
  );
};

const Root = styled.div``;

const Id = styled.span`
  text-transform: uppercase;
`;
