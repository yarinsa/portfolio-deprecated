import React, { useState, useEffect } from "react";
import { Tabs as BPTabs, Tab, Tooltip, Position } from "@blueprintjs/core";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { MatchParams } from "../routes";

export const Tabs: React.FC<{}> = ({}) => {
  let { tab } = useParams<MatchParams>();
  console.log(tab);
  let history = useHistory();
  useEffect(() => {
    document.addEventListener("keydown", handleKey, false);

    // Clean up event listener between renders!
    return function cleanup() {
      document.removeEventListener("keydown", handleKey);
    };
  });

  const [selectedTabIndex, setTabIndex] = useState(0);

  const tabs: string[] = ["Home", "About", "Work", "Contact"];
  const handleKey = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && selectedTabIndex < tabs.length - 1) {
      handleTabChange(selectedTabIndex + 1);
    }
    if (event.key === "ArrowLeft" && selectedTabIndex > 0) {
      handleTabChange(selectedTabIndex - 1);
    }
  };

  const handleTabChange = (tabIndex: string | number) => {
    setTabIndex(+tabIndex);
    history.push(`/${tabs[+tabIndex]}`);
  };

  return (
    <Root>
      <Tooltip content="Use the arrow keys to navigate" position={Position.TOP}>
        <BPTabs
          id="TabsExample"
          onChange={handleTabChange}
          selectedTabId={selectedTabIndex}
        >
          <Tab id="0" title="Home" />
          <Tab id="1" title="About" />
          <Tab id="2" title="Work" />
          <Tab id="3" title="Contact" />
        </BPTabs>
      </Tooltip>
    </Root>
  );
};

const Root = styled.div`
  margin: 0 20px;
  max-width: 460px;
  bottom: 30px;
`;
