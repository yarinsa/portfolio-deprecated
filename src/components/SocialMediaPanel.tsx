import React from "react";
import styled from "styled-components";
import { Button as BPButton } from "@blueprintjs/core";
import { ReactComponent as LinkedInLogo } from "../assets/social-media-icons/linkedin.svg";

export const SocialMediaPanel: React.FC<{}> = () => {
  return (
    <Root>
      <Button intent="primary">
        <a href="https://linkedin.com/yarinsasson">
          <LinkedInLogo />
        </a>
      </Button>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled(BPButton)`
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  svg {
    width: 30px;
    height: 30px;
  }
`;
