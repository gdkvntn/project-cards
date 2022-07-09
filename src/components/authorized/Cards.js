import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Container } from "../unauthorized/UnHome";

const ContainerCard = styled(Container)`
  position: relative;
`;
const CardOne = styled(Flex)`
  position: absolute;
  max-width: 500px;
  max-height: 700px;
  width: 100%;
  height: 100%;
  background: #faebd7;
  border: 1px solid #000000;
  box-shadow: 0px 0px 20px #000000;
  border-radius: 20px;
  @media (max-width: 700px) {
    max-width: 400px;
    max-height: 600px;
  }
  @media (max-width: 500px) {
    max-width: 300px;
    max-height: 500px;
  }
  @media (max-width: 400px) {
    max-width: 250px;
    max-height: 400px;
  }
`;
const CardTwo = styled(CardOne)`
  transform: rotate(5deg);
`;
const CardThree = styled(CardOne)`
  transform: rotate(-5deg);
`;
const CardFour = styled(CardOne)`
  transform: rotate(10deg);
`;
const CardFive = styled(CardOne)`
  transform: rotate(-10deg);
`;
const Card = styled(CardOne)``;

export default function Cards() {
  return (
    <ContainerCard center>
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <Card center>Text</Card>
    </ContainerCard>
  );
}
