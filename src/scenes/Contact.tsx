import React, { useState } from "react";
import { FormGroup, InputGroup, TextArea, Button } from "@blueprintjs/core";
import styled from "styled-components/macro";
import emailjs from "emailjs-com";
import { ReactComponent as BackgroundImage } from "../assets/contact.svg";
import { Toaster } from "../components/Toaster";
import { TEXT_SMALL } from "@blueprintjs/core/lib/esm/common/classes";
import formValidation from "../utils/formValidation.util";
import theme from "../theme/theme.module.scss";

export const Contact: React.FC<{}> = ({}) => {
  const [formContent, setFormContent] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const isNameValid = formValidation.name("Name", formContent.name);
    const isPhoneValid = formValidation.phone("Phone", formContent.name);
    const isEmailValid = formValidation.email(formContent.email);
    if (isNameValid === isPhoneValid && isPhoneValid === isEmailValid) {
      emailjs
        .send("gmail", "yarin_email", formContent, "user_edvhu8GFrqGMvWiUFyHlb")
        .then(() => {
          Toaster.show({ message: "Sent!" });
        })
        .catch(() => {
          Toaster.show({
            message: "Oops, something went wrong!",
            intent: "danger",
          });
        });
    }
  };

  //PLEASE make sure that the input id is matching the state object field.
  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormContent({ ...formContent, [event.target.id]: event.target.value });
  };

  return (
    <Root>
      <StyledBackgroundImage />
      <Form onSubmit={onSubmit}>
        <Name label="Name" labelFor="name">
          <InputGroup required id="name" onChange={handleInput} />
        </Name>
        <Email label="Email" labelFor="email">
          <InputGroup required id="email" onChange={handleInput} />
        </Email>
        <Phone label="Phone" labelFor="phone">
          <InputGroup required id="phone" onChange={handleInput} />
        </Phone>
        <Message label="Message" labelFor="message">
          <TextArea
            required
            growVertically={true}
            id="message"
            fill
            large={true}
            onChange={handleInput}
          />
        </Message>
        <Note className={TEXT_SMALL}>* All fields are required</Note>
        <Submit text="Submit" type="submit" intent="primary"></Submit>
      </Form>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 80%;
`;
const Form = styled.form`
  display: grid;
  grid-template:
    "name ."
    "email phone"
    "message message"
    "note submit"
    /250px 1fr;
  gap: 20px;
  padding: 0;
  &-item {
    position: relative;
  }
  z-index: 1;
  margin-top: 120px;
`;

const Name = styled(FormGroup)`
  grid-area: name;
`;

const Email = styled(FormGroup)`
  grid-area: email;
`;

const Phone = styled(FormGroup)`
  grid-area: phone;
  max-width: 250px;
`;

const Message = styled(FormGroup)`
  grid-area: message;
`;

const Note = styled.small`
  color: ${theme.primaryColor};
  grid-area: note;
`;

const Submit = styled(Button)`
  grid-area: submit;
  width: 200px;
  margin-left: auto;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0.7;
  width: 90%;
  height: auto;
`;
