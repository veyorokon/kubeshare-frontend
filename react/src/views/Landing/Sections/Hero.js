import React from "react";
import {Box, Flex, Section, Button} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

const Nav = styled(Box)`
  background-color: white;
  box-shadow: 0 2px 4px rgba(3, 27, 78, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  div:first-child {
    border-bottom: 1px solid #e4e8e8;
  }
`;

const NavButton = styled(Button)`
  background: unset;
  border-color: unset;
  border: none;
  cursor: pointer;
  width: 5rem;
  min-width: fit-content;
  outline: none;
  letter-spacing: 0.2px;
`;

class Hero extends React.Component {
  render() {
    return (
      <Section
        // p={r("2 ------> 3")}
        height={r("70rem 85rem -> 90rem")}
        background={r("greys.1")}
        overflow="hidden"
      >
        <Nav>
          <Flex
            p={"2px 16px"}
            justifyContent="flex-end"
            alignItems="center"
            w="100%"
            h={"4"}
            fw={400}
          >
            <NavButton fs={"1.2rem"}>Sign in</NavButton>
          </Flex>
          <Flex alignItems="center" w="100%" h={"5"}>
            Row 2
          </Flex>
        </Nav>
        <Flex mt={"96px"}>content</Flex>
      </Section>
    );
  }
}

export default Hero;
