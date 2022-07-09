import React from "react";
import styled from "styled-components";
import { baseTheme } from "../styles/theme";
import { Container } from "./UnHome";

const Form = styled.form`
  max-width: 580px;
  width: 100%;
  background: rgba(250, 235, 215, 0.4);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 100px 40px 100px 40px;
  @media (max-width: 500px) {
    padding: 20px;
  }
`;

const InputCaptions = styled.input`
  border: none;
  background: none;
  border-bottom: 4px solid ${baseTheme.color.beige};
  margin-bottom: 55px;

  @media (max-width: 500px) {
    margin-bottom: 40px;
  }
`;

const QuestionWrapper = styled.div`
  background: rgba(250, 235, 215, 0.5);
  border-radius: 20px;
  display: inherit;
  flex-direction: inherit;
  padding: 40px 20px;
  margin-bottom: 80px;
  @media (max-width: 500px) {
    padding: 20px;
    margin-bottom: 40px;
  }
`;
const InputQuestion = styled(InputCaptions)`
  margin-bottom: 5px;
`;
const TextQuestion = styled.textarea`
  border: none;
  background: none;
  border-bottom: 4px solid ${baseTheme.color.beige};
  margin-bottom: 5px;
  margin-top: 20px;
`;

const AddButton = styled.button`
  background: ${baseTheme.color.beige};
  width: 100%;
  height: 70px;
  max-width: 280px;

  border: none;
  border-radius: 20px;
  transition: 1s;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

export default function Create() {
  return (
    <Container center>
      <Form>
        <InputCaptions type="text" placeholder="Title, subject" />
        <InputCaptions type="text" placeholder="Description" />
        <QuestionWrapper>
          <InputQuestion type="text" />
          <p>Question</p>
          <TextQuestion type="text" rows="1" />
          <p>Response</p>
        </QuestionWrapper>
        <div style={{ textAlign: "center" }}>
          <AddButton>Add+</AddButton>
        </div>
      </Form>
    </Container>
  );
}
