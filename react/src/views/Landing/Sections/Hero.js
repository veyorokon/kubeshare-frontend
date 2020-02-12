import React from "react";
import {Box, Flex, Section, Button, ImageBox, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

// import {ReactComponent as Logo} from "assets/anchor.svg";

const heroBg = "/images/cityskyline.png";
const HeroBG = `url(${"https://www.digitalocean.com/assets/media/homepage/bg-home-1-d54581d7.jpg"})`;

const Nav = styled(Box)`
  background-color: white;
  box-shadow: 0 2px 4px rgba(3, 27, 78, 0.1);
  position: fixed;
  z-index: 10;
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
      <NavButton fw={500} color={"greys.0"} fs={"1.2rem"}>
        Sign in
      </NavButton>
    </Flex>
    <Flex alignItems="center" w="100%" h={"5"}>
      Kubeshare
    </Flex>
  </Nav>
);

class Hero extends React.Component {
  render() {
    return (
      <Section
        // p={r("2 ------> 3")}
        height={r("60rem 70rem -> 80rem")}
        background={r("greys.1")}
        overflow="hidden"
      >
        <NavBar />
        <ImageBox backgroundImage={[HeroBG]} pt={"96px"}>
          <Box w={"100%"} ml={5} mr={5} mt={3} mb={3}>
            <Box w={"100%"} h="100%" p={5}>
              <Text as="h1" fw={500} fs={6} color="whites.0">
                Shared Kubernetes
              </Text>
              <Text as="p" fw={500} fs={"2.4rem"} color="whites.0">
                We make it simple to launch in the cloud and scale up as you
                grow – with an intuitive control panel, predictable pricing,
                team accounts, and more.
              </Text>
            </Box>
          </Box>
        </ImageBox>
      </Section>
    );
  }
}

export default Hero;