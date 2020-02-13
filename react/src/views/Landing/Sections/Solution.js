import React from "react";
import {Box, Flex, Section, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

// const Container = styled(Box)`
//   background: linear-gradient(90deg, #fff 20px, transparent 1%) center,
//     linear-gradient(#fff 20px, transparent 1%) center, #d6ddff;
//   background-size: 22px 22px;
//   position: relative;
//   height: 100%;
// `;

const Title = styled(Text)`
  text-shadow: 0 0 black;
  letter-spacing: -0.7px;
`;

class Solution extends React.Component {
  render() {
    return (
      <Section
        // p={r("2 ------> 3")}
        height={r("80rem")}
        background={r("grey.1")}
        overflow="hidden"
      >
        <Box height="100%" width="100%" pt={5} pb={5}>
          <Flex ml={5} mr={5} flexDirection="column" alignItems="center">
            <Title
              mt={2}
              lineHeight={"1.5"}
              as="h2"
              fw={600}
              fs={"3.6rem"}
              color="navys.0"
            >
              Scalable Docker deployments
            </Title>
            <Text
              mt={3}
              mb={4}
              lineHeight={"1.5"}
              as="p"
              fw={300}
              fs={"2rem"}
              color="navys.2"
            >
              Free staging deployments and high availability production
              deployments make continuous integration easy.
            </Text>
          </Flex>
        </Box>
      </Section>
    );
  }
}

export default Solution;
