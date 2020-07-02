import React from "react";
import styled from "styled-components";
import { WorkList } from "../components/WorkList";
import { AddProject } from "../components/AddProject";
import { AddTechnology } from "../components/AddTechnology";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";

const Admin: React.FC<{}> = ({}) => {
  Storage.list("")
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  const handleUpload = (selectorFiles: FileList | null) => {
    if (selectorFiles !== null) {
      const file = selectorFiles[0];
      console.log(file);
      Storage.put("example.png", file, {
        contentType: "image/png",
      })
        .then((uploadedImageUrl) => {
          //   const technologyWithImage = { uploadedImageUrl, ...technology };
          console.log(uploadedImageUrl);
          //   setTechnology(technologyWithImage);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Root>
      <h1>Admin Page</h1>
      <ProjectsContainer>
        <WorkList toggleDialog={() => {}}></WorkList>
      </ProjectsContainer>
      <section>
        <AddProject />
      </section>
      <AddTechnology />
      <input
        type="file"
        accept="image/png"
        onChange={(evt) => handleUpload(evt.target.files)}
      />
      <AmplifySignOut />
    </Root>
  );
};

export default withAuthenticator(Admin);

const Root = styled.main`
  display: flex;
  flex-direction: column;
`;

const ProjectsContainer = styled.section`
  max-height: 450px;
  overflow-y: scroll;
`;

const AddProjectContainer = styled.section``;
