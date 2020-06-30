import React, { useState } from "react";
import styled from "styled-components";
import { WorkListItem } from "./WorkListItem";

interface WorkListProps {
  toggleDialog: CallableFunction;
}
export const WorkList: React.FC<WorkListProps> = ({ toggleDialog }) => {
  const WorkListItems = [
    <WorkListItem key="43" toggleDialog={toggleDialog} />,
    <WorkListItem key="44" toggleDialog={toggleDialog} />,
    <WorkListItem key="45" toggleDialog={toggleDialog} />,
    <WorkListItem key="41" toggleDialog={toggleDialog} />,
    <WorkListItem key="42" toggleDialog={toggleDialog} />,
    <WorkListItem key="49" toggleDialog={toggleDialog} />,
    <WorkListItem key="46" toggleDialog={toggleDialog} />,
  ];
  return <Root>{WorkListItems}</Root>;
};

const Root = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 30px 0;
  &-item {
    position: relative;
  }
`;
