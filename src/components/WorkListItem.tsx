import React from "react";
import { Card as BPCARD } from "@blueprintjs/core";
import styled from "styled-components/macro";
import img from "../assets/projects/watermelon-market/screenshots/1.png";

interface WorkListItemProps {
  toggleDialog: CallableFunction;
}
export const WorkListItem: React.FC<WorkListItemProps> = ({ toggleDialog }) => {
  return (
    <Card elevation={0} onClick={() => toggleDialog(true)}>
      <CardCaption>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        pariatur reprehenderit fugit distinctio voluptas molestias! Veniam,
        distinctio est! Non, ut.
      </CardCaption>
    </Card>
  );
};

const Card = styled(BPCARD)`
  height: 200px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 1px rgba(42, 2, 64, 0.1), 0 2px 4px rgba(62, 1, 76, 0.2),
      0 8px 24px rgba(51, 2, 76, 0.2);
  }
  position: relative;
  overflow: hidden;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
`;

const CardCaption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 3rem;
  color: #fff;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.25s ease-in-out;
  background-color: #141c3a;
  &:hover {
    opacity: 0.8;
  }
`;
