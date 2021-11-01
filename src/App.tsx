import React from "react";
import "./theme/index.scss";
// import "./_typography-two.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import styled from "styled-components/macro";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import theme from "./theme/theme.module.scss";
import { Button } from "@blueprintjs/core";
import { ReactComponent as LinkedInLogo } from "./assets/social-media-icons/linkedin.svg";
import { ReactComponent as GitHubLogo } from "./assets/social-media-icons/github.svg";
import { ReactComponent as CVLogo } from "./assets/social-media-icons/cv.svg";

function App() {
  return (
    <Root>
      <Header />
      <Switch>
        <Main>
          <Redirect exact from="/" to="/home" />
          {routes.map((route, index) => {
            return (
              <Route key={index} path={`/${route.name}`}>
                <route.component />
              </Route>
            );
          })}
        </Main>
      </Switch>
      <ButtonContainer>
        <RoundedButton intent="primary">
          <a href="https://www.github.com/yarinsa/">
            <LinkedInLogo />
          </a>
        </RoundedButton>
        <RoundedButton intent="primary">
          <a href="https://www.linkedin.com/in/yarinsasson/">
            <GitHubLogo />
          </a>
        </RoundedButton>
        {/* <RoundedButton intent="primary">
          <a href="https://yarin-portfolio-storage-bucket165231-dev.s3.amazonaws.com/Yarin+Sasson+CV.pdf">
            <CVLogo />
          </a>
        </RoundedButton> */}
      </ButtonContainer>
    </Root>
  );
}

export default App;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  @media only screen and (max-width: ${theme.phoneScreen}) {
    /* flex-direction: column-reverse; */
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${theme.phoneScreen}) {
    bottom: 30px;
  }
`;

const RoundedButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  z-index: 2;
  &:not(:first-child) {
    margin-top: 10px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
