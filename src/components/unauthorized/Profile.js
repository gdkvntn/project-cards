import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Container } from "./UnHome";

const ProfileContainer = styled(Flex)`
  background: rgba(250, 235, 215, 0.4);
  border-radius: 20px;
  max-width: 780px;
  max-height: 780px;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;
const AvatarWrapper = styled.div`
  text-align: center;
`;
const Avatar = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background: red;
  margin-bottom: 30px;
`;
const Name = styled.p``;

const StatsWrapper = styled(Flex)`
  background: rgba(250, 235, 215, 0.4);
  border-radius: 20px;
  max-width: 580px;
  width: 100%;
  padding: 50px;
`;
const Stats = styled(Flex)`
  width: 100%;
  div {
    text-align: center;
    flex-basis: 33.3%;
    margin-top: 10px;
    p {
      margin-top: 10px;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default function Profile() {
  return (
    <Container center>
      <ProfileContainer center column>
        <AvatarWrapper>
          <Avatar></Avatar>
          <Name>Name</Name>
        </AvatarWrapper>

        <StatsWrapper column center>
          <h2 style={{ fontWeight: 700 }}>STATS</h2>
          <Stats justifyBetween>
            <Flex column justifyBetween>
              <p>days in a row</p>
              <p>5</p>
            </Flex>
            <Flex column justifyBetween>
              <p>days per month</p>
              <p>5</p>
            </Flex>
            <Flex column justifyBetween>
              <p>only days</p>
              <p>5</p>
            </Flex>
          </Stats>
        </StatsWrapper>
      </ProfileContainer>
    </Container>
  );
}
