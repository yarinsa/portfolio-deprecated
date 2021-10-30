import React, { useState } from "react";
import { FormGroup, InputGroup, TextArea, Button } from "@blueprintjs/core";
import styled from "styled-components/macro";
import emailjs from "emailjs-com";
import { ReactComponent as BackgroundImage } from "../assets/contact.svg";
import { Toaster } from "../components/Toaster";
import { TEXT_SMALL } from "@blueprintjs/core/lib/esm/common/classes";
import formValidation from "../utils/formValidation.util";
import theme from "../theme/theme.module.scss";

export const Contact: React.FC<{}> = () => {
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
        <FormGroup label="Name" labelFor="name">
          <InputGroup required id="name" onChange={handleInput} />
        </FormGroup>
        <FormGroup label="Email" labelFor="email">
          <InputGroup required id="email" onChange={handleInput} />
        </FormGroup>
        <FormGroup label="Phone" labelFor="phone">
          <InputGroup required id="phone" onChange={handleInput} />
        </FormGroup>
        <FormGroup label="Message" labelFor="message">
          <TextArea
            required
            growVertically={true}
            id="message"
            fill
            large={true}
            onChange={handleInput}
          />
        </FormGroup>
        <Note className={TEXT_SMALL}>* All fields are required</Note>
        <Submit text="Submit" type="submit" intent="primary"></Submit>
      </Form>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  height: 80%;
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-top: 120px;
  @media only screen and (max-width: 640px) {
    margin-top: 60px;
  }
`;

const Note = styled.small`
  color: ${theme.primaryColor};
`;

const Submit = styled(Button)`
  grid-area: submit;
  width: 200px;
  margin-left: auto;
  @media only screen and (max-width: 640px) {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 0;
    height: 50px;
    font-size: 18px;
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0.7;
  width: 40%;
  height: auto;
`;
