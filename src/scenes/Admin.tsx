import React from "react";
import styled from "styled-components";
import { ProjectList } from "../components/Projects/ProjectList";
import { AddProject } from "../components/Projects/AddProject/AddProject";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { TechnologiesPanel } from "../components/Technologies/TechnologiesPanel";
import theme from "../theme/theme.module.scss";

const Admin: React.FC<{}> = () => {
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
