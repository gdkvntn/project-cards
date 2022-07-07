import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";

const HeaderContainer = styled.div`
  background-color: #ffffff25;
  height: 90px;
`;
const Navigation = styled.nav`
  height: 100%;
`;
const HeaderItems = styled(Flex)`
  height: 100%;
  a {
    font-size: 24px;
    line-height: 29px;
    text-decoration: none;
    color: #faebd7;
    transition: 1s linear;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Input = styled.input`
  width: 730px;
  height: 40px;
  background: rgba(250, 235, 215, 0.4);
  border-radius: 10px;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  background-image: url("/svg/search.svg");
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 10px;
  padding-left: 45px;
  :focus-visible {
    outline: none;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <HeaderItems justifyAround alignCenter>
          <FlexItem>
            <Link to="/">HOME</Link>
          </FlexItem>
          <FlexItem>
            <Input type="text" placeholder="Поиск..." />
          </FlexItem>
          <FlexItem>
            <Link to="create">CTREATE</Link>
          </FlexItem>
          <FlexItem>
            <Link to="profile">PROFILE</Link>
          </FlexItem>
        </HeaderItems>
      </Navigation>
    </HeaderContainer>
  );
}
