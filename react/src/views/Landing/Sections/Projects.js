import React from "react";
import {Box, Flex, Section, Button, ImageBox, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

// const Container = styled(Box)`
//   background: linear-gradient(90deg, #fff 20px, transparent 1%) center,
//     linear-gradient(#fff 20px, transparent 1%) center, #d6ddff;
//   background-size: 22px 22px;
//   position: relative;
//   height: 100%;
// `;

class Projects extends React.Component {
  render() {
    return (
      <Section
        // p={r("2 ------> 3")}
        height={r("30rem")}
        background={r("grey.1")}
        overflow="hidden"
      >
        <Box h="100%" bg={"greys.3"}>
          test
        </Box>
      </Section>
    );
  }
}

export default Projects;
