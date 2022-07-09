import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { baseTheme } from "../styles/theme";

export const Container = styled(Flex)`
  height: 90%;
  margin: 0 10px;
  @media (max-width: 500px) {
    height: 80%;
  }
`;

const Form = styled.form`
  max-width: 450px;
  background: rgba(250, 235, 215, 0.4);
  border-radius: 20px;
  padding: 40px;
  padding-bottom: 100px;
  @media (max-width: 500px) {
    padding: 20px;
    padding-bottom: 50px;
    max-width: 300px;
  }
`;

const TitleForm = styled.h2`
  position: relative;
  overflow: hidden;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  width: 100%;
  color: ${baseTheme.color.beige};

  :before,
  :after {
    content: "";

    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 2px;
    background-color: #faebd7;
    position: relative;
  }
  :before {
    margin-left: -100%;
    left: -14px;
  }
  :after {
    margin-right: -100%;
    right: -14px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  margin-bottom: 50px;
  color: ${baseTheme.color.beige};

  @media (max-width: 500px) {
    line-height: 44px;
    font-size: 36px;
  }
`;

const Input = styled.input`
  max-width: 350px;
  width: 100%;
  height: 70px;
  background: rgba(250, 235, 215, 0.4);
  border: 2px solid #faebd7;
  border-radius: 20px;
  margin-top: 50px;
  padding: 0 20px;
  @media (max-width: 500px) {
    font-size: 16px;
    margin-top: 20px;
    height: 40px;
    max-width: 250px;
  }
`;
const Submit = styled.input`
  max-width: 200px;
  font-size: 24px;
  border: none;
  height: 70px;
  width: 100%;
  background: #faebd7;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
  transition: 1s;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    max-width: 100px;
    height: 40px;
    margin-top: 30px;
  }
`;

export default function UnHome() {
  return (
    <Container center column>
      <Title>Learn and grow</Title>
      <Form>
        <Flex column alignCenter>
          <TitleForm>Login</TitleForm>

          <Input type="email" placeholder="Login" />
          <Input type="password" placeholder="Password" />
          <Submit type="submit" value="Login" />
        </Flex>
      </Form>
    </Container>
  );
}
