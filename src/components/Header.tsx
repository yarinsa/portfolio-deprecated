import React from "react";
import styled from "styled-components";
import { Tabs } from "./Tabs";
import theme from "../theme/theme.module.scss";

export const Header: React.FC<{}> = () => {
  return (
    <Root>
      <Logo>Yarin Sasson</Logo>
      <Tabs />
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  padding: 0 20px;
  width: 100vw;
  @media only screen and (max-width: ${theme.phoneScreen}) {
    flex-direction: column-reverse;
    margin: 0;
    padding: 0;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-family: "Galada", cursive;
  font-weight: normal;
  line-height: 44px;
  color: ${theme.primaryColor};
  @media only screen and (max-width: ${theme.phoneScreen}) {
    /* display: none; */
    padding: 20px;
  }
`;
