import React from "react";
import styled from "styled-components";
import theme from "../theme/theme.module.scss";

interface TechnologyBoxProps {
  image: string;
  name: string;
}

export const TechnologyBox: React.FC<TechnologyBoxProps> = ({
  name,
  image,
}) => {
  return (
    <Root>
      <img src={image} />
      <Caption>{name}</Caption>
    </Root>
  );
};

const Root = styled.div`
  border-radius: 6px;
  background: white;
  display: flex;
  flex-direction: column;
  line-height: 11px;
  width: 40px;
  height: 40px;
  padding: 5px;
  border: 1px solid ${theme.primaryColor};
  position: relative;
  img {
    width: 100%;
    height: auto;
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
  width: 40px;
  height: 40px;
  opacity: 0;
  border-radius: 6px;
  font-size: 10px;
  transition: 0.25s ease-in-out;
  background-color: #141c3a;
  &:hover {
    opacity: 0.8;
  }
`;
