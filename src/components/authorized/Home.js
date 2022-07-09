import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { baseTheme } from "../styles/theme";

const arr = [
  {
    title: "title",
    questions: "33",
    description: "Descripton",
  },
  {
    title: "title",
    questions: "33",
    description: "Descripton",
  },
  {
    title: "title",
    questions: "33",
    description: "Descripton",
  },
];

const ContainerCards = styled(Flex)`
  margin: 0 20px;
  gap: 30px;
  margin-top: 30px;
`;

const Card = styled(Flex)`
  background: rgba(250, 235, 215, 0.4);
  border-radius: 20px;
  max-width: 580px;
  min-height: 200px;
  width: 100%;

  padding: 40px;
`;
const Title = styled.h2`
  font-weight: 700;
  color: ${baseTheme.color.beige};
  margin-bottom: 5px;
`;
const Question = styled.p`
  font-weight: 700;
  font-size: 16px;
`;
const Description = styled.p`
  margin-top: 30px;
`;

export default function Home() {
  return (
    <ContainerCards center column>
      {arr.map((el) => {
        return (
          <Card column>
            <Title>{el.title}</Title>
            <Question>{el.questions} questions</Question>
            <Description>{el.description}</Description>
          </Card>
        );
      })}
    </ContainerCards>
  );
}
