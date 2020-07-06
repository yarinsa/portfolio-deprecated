import React from "react";
import { FormGroup, InputGroup, TextArea, Icon } from "@blueprintjs/core";
import styled from "styled-components";
import theme from "../theme/theme.module.scss";

interface ParagraphCreateProps {
  onInput: CallableFunction;
  onRemove: CallableFunction;
  header: string | "";
  content: string | "";
  index: number;
}

export const ParagraphCreate: React.FC<ParagraphCreateProps> = ({
  onInput,
  onRemove,
  header,
  content,
  index,
}) => {
  return (
    <Root>
      <FormGroup label="Header" labelFor="header">
        <InputGroup
          required
          id="header"
          value={header}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onInput(event, index);
          }}
        />
      </FormGroup>
      <RemoveButton icon="remove" onClick={() => onRemove(index)} />
      <FormGroup label="Content" labelFor="content">
        <TextArea
          required
          growVertically={true}
          id="content"
          fill
          large={true}
          value={content}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            onInput(event, index);
          }}
        />
      </FormGroup>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;
const RemoveButton = styled(Icon)`
  position: absolute;
  top: 0;
  right: 5px;
  color: #999;
  cursor: pointer;
  &:hover {
    color: ${theme.primaryColor};
  }
`;
