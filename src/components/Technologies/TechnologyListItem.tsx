import React from "react";
import styled from "styled-components";
import theme from "../../theme/theme.module.scss";

interface TechnologyListItemProps {
  image: string;
  name: string;
  isLoaded: boolean;
}

export const TechnologyListItem: React.FC<TechnologyListItemProps> = ({
  name,
  image,
}) => {
  return (
    <Root>
      <img src={image} alt={name} />
      <Caption>{name}</Caption>
    </Root>
  );
};

const Root = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  line-height: 11px;
  width: 60px;
  height: 60px;
  padding: 5px;
  border: 1px solid ${theme.primaryColor};
  position: relative;
  user-select:none;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  h5 {
    margin: 0;
  }
`;

const Caption = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #fff;
  z-index: 1;
  position: absolute;
  top: -1px;
  left: -1px;
  width: 60px;
  height: 60px;
  opacity: 0;
  border-radius: 6px;
  font-size: 10px;
  transition: 0.25s ease-in-out;
  background-color: #141c3a;
  &:hover {
    opacity: 0.9;
  }
`;
