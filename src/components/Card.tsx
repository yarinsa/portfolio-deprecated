import React, { ReactSVGElement, FunctionComponent, SVGProps } from "react";
import { Card as BPCard, Classes } from "@blueprintjs/core";
import styled from "styled-components/macro";
import theme from "../theme/theme.module.scss";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  description: string;
  tableColumnLeft?: TableColumn;
  tableColumnRight?: TableColumn;
}

interface TableColumn {
  header: string;
  content: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  icon,
  description,
  tableColumnLeft,
  tableColumnRight,
}) => {
  return (
    <Root>
      <TitleContainer>
        {icon && icon}
        <Title>{title}</Title>
      </TitleContainer>
      <div>
        <Description>{description}</Description>

        <table>
          <thead>
            <tr>
              <TableHeader>{tableColumnLeft?.header}</TableHeader>
              <TableHeader>{tableColumnRight?.header}</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableText>{tableColumnLeft?.content}</TableText>
              <TableText>{tableColumnRight?.content}</TableText>
            </tr>
          </tbody>
        </table>
      </div>
    </Root>
  );
};

const Root = styled(BPCard)`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.primaryColor};
  svg {
    height: 20px;
    width: auto;
    margin-right: 10px;
    path {
      fill: ${theme.primaryColor};
    }
  }
`;

const Title = styled.h3`
  color: ${theme.primaryColor};
  font-size: 18px;
  opacity: 1;
  margin: 0;
  top: 0px;
`;

const Description = styled.p`
  font-family: SF Pro Display;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  padding: 10px;
  margin: 0;
`;

const TableText = styled.td`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.04em;
  padding: 0 5px;
`;

const TableHeader = styled.td`
  color: ${theme.primaryColor};

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  margin: 20px 0 5px 0;
  padding-left: 5px;
`;
