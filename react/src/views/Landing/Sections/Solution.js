import React from "react";
import {Box, Flex, Section, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import VertTabs from "./components/VertTabs";

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
        minHeight="fit-content"
        background={r("grey.1")}
        overflow="hidden"
      >
        <Flex
          bg="greys.3"
          flexDirection="column"
          height="100%"
          width="100%"
          pt={5}
          pb={5}
        >
          <Flex mb={5} ml={5} mr={5} flexDirection="column" alignItems="center">
            <Title
              mt={2}
              lineHeight={"1.5"}
              as="h2"
              fw={600}
              fs={"3.6rem"}
              color="navys.0"
            >
              Scalable and secure Docker deployments
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
              Free staging deployments for testing and affordable high
              availability deployments for production.
            </Text>
          </Flex>
          <Box width="100%" height="100%">
            <VertTabs height="100%">test</VertTabs>
          </Box>
        </Flex>
      </Section>
    );
  }
}

export default Solution;
