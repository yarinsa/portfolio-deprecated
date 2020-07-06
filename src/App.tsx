import React from "react";
import "./theme/index.scss";
// import "./_typography-two.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import styled from "styled-components/macro";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import theme from "./theme/theme.module.scss";
import { SocialMediaPanel } from "./components/SocialMediaPanel";
import { ReactComponent as LinkedInLogo } from "./assets/social-media-icons/linkedin.svg";
import { Button } from "@blueprintjs/core";

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
      <LinkedIn intent="primary">
        <a href="https://www.linkedin.com/in/yarinsasson/">
          <LinkedInLogo />
        </a>
      </LinkedIn>
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

const LinkedInLink = styled(LinkedInLogo)``;

const LinkedIn = styled(Button)`
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  z-index: 2;
  svg {
    width: 30px;
    height: 30px;
  }
  @media only screen and (max-width: ${theme.phoneScreen}) {
    bottom: 30px;
  }
`;
