import React, { useEffect } from "react";
import "./theme/index.scss";
// import "./_typography-two.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import { Home } from "./scenes/Home";
import { Tabs } from "./components/Tabs";
import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { About } from "./scenes/About";
import { Work } from "./scenes/Work";
import { Contact } from "./scenes/Contact";
import Admin from "./scenes/Admin";

document.querySelector("body")?.classList.replace("red", "blue");

function App() {
  return (
    <Root>
      <Header>
        <Tabs />
      </Header>
      <Switch>
        <Main>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Admin" component={Admin} />
        </Main>
      </Switch>
    </Root>
  );
}

export default App;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

const Main = styled.main`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
