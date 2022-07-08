import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import { baseTheme } from "./styles/theme.js";
import { AiFillHome } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { AiFillProfile } from "react-icons/ai";
import Media from "react-media";

const HeaderContainer = styled.div`
  background-color: #ffffff25;
  height: 90px;
  @media (max-width: 720px) {
    height: auto;
    padding: 20px;
  }
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
    color: ${baseTheme.color.beige};
    transition: 1s linear;
    &:hover {
      opacity: 0.5;
    }
  }
  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 10px;
  }
  @media (max-width: 500px) {
    .headerInput {
      order: 2;
      flex-basis: 100%;
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
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export default function Header() {
  console.log(baseTheme);
  return (
    <HeaderContainer>
      <Navigation>
        <HeaderItems justifyAround alignCenter>
          <FlexItem>
            <Link to="/">
              <Media queries={{ small: { maxWidth: 720 } }}>
                {(matches) => (matches.small ? <AiFillHome /> : "HOME")}
              </Media>
            </Link>
          </FlexItem>
          <FlexItem className="headerInput">
            <Input type="text" placeholder="Поиск..." />
          </FlexItem>
          <FlexItem>
            <Link to="create">
              <Media queries={{ small: { maxWidth: 720 } }}>
                {(matches) => (matches.small ? <IoIosCreate /> : "CTREATE")}
              </Media>
            </Link>
          </FlexItem>
          <FlexItem>
            <Link to="profile">
              <Media queries={{ small: { maxWidth: 720 } }}>
                {(matches) => (matches.small ? <AiFillProfile /> : " PROFILE")}
              </Media>
            </Link>
          </FlexItem>
        </HeaderItems>
      </Navigation>
    </HeaderContainer>
  );
}
