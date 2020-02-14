import React from "react";
import {Box, Flex, Section, Button, ImageBox, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";
import Signin from "./components/Signin";

import {ReactComponent as BgSVG} from "assets/svg/anchor-pattern.svg";
import {ReactComponent as LogoSVG} from "assets/svg/anchor.svg";

const StyledBGSvg = styled(BgSVG)`
  height: 100%;
  width: auto;
  position: absolute;
  padding: 3rem;
`;

const StyledLogoSvg = styled(LogoSVG)`
  height: 2.75rem;
  width: auto;
  margin: 0 1rem 0 2rem;
`;

const Nav = styled(Box)`
  background-color: white;
  box-shadow: 0 2px 4px rgba(3, 27, 78, 0.1);
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  div:first-child {
    border-bottom: 1px solid #e4e8e8;
  }
`;

const NavButton = styled(Button)`
  height: 100%;
  background: unset;
  border-color: unset;
  border: none;
  cursor: pointer;
  width: 6rem;
  min-width: fit-content;
  outline: none;
  letter-spacing: 0.2px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #333;
  }
`;

const NavBar = () => (
  <Nav>
    <Flex
      p={"2px 16px"}
      justifyContent="flex-end"
      alignItems="center"
      w="100%"
      h={"4"}
    >
      <NavButton fw={600} color={"greys.0"} fs={"1.2rem"}>
        Sign in
      </NavButton>
    </Flex>
    <Flex alignItems="center" w="100%" h={"5"}>
      <StyledLogoSvg />
      <Text lineHeight={"1.5"} as="p" fw={300} fs={"2.4rem"} color="navys.0">
        KubeShare
      </Text>
    </Flex>
  </Nav>
);

const Wrapper = styled(Box)`
  z-index: 10;
`;
const Container = styled(Flex)`
  align-items: center;
`;
const LeftBox = styled(Box)`
  padding: 1rem;
  padding-right: 3rem;
`;

const RightBox = styled(Box)``;

class Hero extends React.Component {
  render() {
    return (
      <Section
        // p={r("2 ------> 3")}
        height={r("110rem ------> 80rem")}
        background={r("navys.1")}
        overflow="hidden"
      >
        <NavBar />

        <ImageBox pt={"96px"}>
          <StyledBGSvg />
          <Wrapper w={"100%"} m={r("0 ------> 3")}>
            <Container
              flexDirection={r("column ------> row")}
              w={"100%"}
              h="100%"
              p={4}
            >
              <LeftBox w={r("100% ------> 50%")}>
                <Text
                  textAlign={r("center ------> left")}
                  width="100%"
                  mb={"1.5rem"}
                  lineHeight={"1.18"}
                  letterSpacing={"1px"}
                  as="h1"
                  fw={800}
                  fs={"6rem"}
                  color="whites.0"
                >
                  Shared Kubernetes
                </Text>
                <Text
                  textAlign={r("center ------> left")}
                  mt={3}
                  mb={4}
                  lineHeight={"1.87"}
                  as="p"
                  fw={300}
                  fs={"2.4rem"}
                  color="whites.0"
                >
                  From Docker to deployment in seconds with our shared
                  Kubernetes. Scalability, convenience and security without the
                  technical and financial overhead.
                </Text>
              </LeftBox>
              <RightBox w={r("100% ------> 50%")}>
                <Signin m="auto" mr={r("auto ------> unset")} />
              </RightBox>
            </Container>
          </Wrapper>
        </ImageBox>
      </Section>
    );
  }
}

export default Hero;
