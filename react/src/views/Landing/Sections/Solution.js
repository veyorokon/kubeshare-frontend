import React from "react";
import {Box, Section} from "components";
import {responsive as r} from "lib";

// const Container = styled(Box)`
//   background: linear-gradient(90deg, #fff 20px, transparent 1%) center,
//     linear-gradient(#fff 20px, transparent 1%) center, #d6ddff;
//   background-size: 22px 22px;
//   position: relative;
//   height: 100%;
// `;

class Solution extends React.Component {
  render() {
    return (
      <Section
        // p={r("2 ------> 3")}
        height={r("80rem")}
        background={r("grey.1")}
        overflow="hidden"
      >
        <SideBar />
      </Section>
    );
  }
}

export default Solution;
