import React from "react";
import styled from "styled-components";
import { ProjectList } from "../components/Projects/ProjectList";
import { AddProject } from "../components/Projects/AddProject/AddProject";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { TechnologiesPanel } from "../components/Technologies/TechnologiesPanel";
import theme from "../theme/theme.module.scss";
import { Auth } from "aws-amplify";

const Admin: React.FC<{}> = () => {
  Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => console.log(user))
    .catch((err) => console.log(err));
  return (
    <Root>
      <AddProject />
      <Divider />
      <TechnologiesPanel />
      <hr />
      <Divider />
      <ProjectsContainer>
        <ProjectList />
      </ProjectsContainer>

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

const Divider = styled.hr`
  height: 3px;
  width: 100%;
  background-color: ${theme.primaryColor};
  border-radius: 10px;
  box-shadow: none;
  border: none;
  opacity: 0.2;
  margin: 20px 0;
`;
