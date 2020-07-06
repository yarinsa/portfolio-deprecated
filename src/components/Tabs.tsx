import React, { useState, useEffect } from "react";
import {
  Tabs as BPTabs,
  Tab,
  Tooltip,
  Position,
  Dialog,
  Classes,
} from "@blueprintjs/core";
import styled from "styled-components";
import { useHistory, Link, useLocation } from "react-router-dom";
import { routes } from "../routes";
import theme from "../theme/theme.module.scss";

export const Tabs: React.FC<{}> = () => {
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    document.addEventListener("keydown", handleKey, false);
    setSelectedTab(getActivePage());
    // Clean up event listener between renders!
    return function cleanup() {
      document.removeEventListener("keydown", handleKey, false);
    };
  });

  const getActivePage = () => {
    return location.pathname.split("/")[1];
  };

  const [selectedTab, setSelectedTab] = useState(getActivePage());
  console.log(selectedTab);
  const tabs: string[] = routes.map((route) => route.name);

  const handleKey = (event: KeyboardEvent) => {
    const selectedTabIndex = tabs.findIndex((tab) => tab === selectedTab);

    if (!selectedTabIndex && selectedTabIndex !== 0) return;

    if (event.key === "ArrowRight" && selectedTabIndex < tabs.length - 1) {
      handleTabChange(tabs[selectedTabIndex + 1]);
    }
    if (event.key === "ArrowLeft" && selectedTabIndex > 0) {
      handleTabChange(tabs[selectedTabIndex - 1]);
    }
  };
  const [isAdminAlertOpen, setIsAdmin] = useState(false);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    history.push(`/${tab}`);
    if (tab === "admin") {
      setIsAdmin(true);
    }
  };

  return (
    <Root>
      {selectedTab === "admin" && (
        <Dialog
          isOpen={isAdminAlertOpen}
          isCloseButtonShown={true}
          onClose={() => setIsAdmin(false)}
          title="Important Note!"
        >
          <p className={Classes.DIALOG_BODY}>
            Welcome to the admin panel!
            <br />
            I keep this open for guests so they can have some fun with the UI,
            <br />
            username: guest@yarin.com,
            <br />
            password: 12345678
            <br />
            Have fun :)
          </p>
        </Dialog>
      )}
      <Tooltip content="Use the arrow keys to navigate" position={Position.TOP}>
        <BPTabs
          id="TabsExample"
          onChange={handleTabChange}
          selectedTabId={selectedTab}
        >
          {routes.map((route) => (
            <Tab id={route.name} key={route.name} title={route.name}>
              <Link to={`/${route.name}`} />
            </Tab>
          ))}
        </BPTabs>
      </Tooltip>
    </Root>
  );
};

const Root = styled.div`
  margin: 0 20px;
  max-width: 460px;
  bottom: 30px;
  @media only screen and (max-width: ${theme.phoneScreen}) {
    margin: 0;
    max-width: unset;
  }
`;
