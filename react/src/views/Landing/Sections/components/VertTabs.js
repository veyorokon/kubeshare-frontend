/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Box, Flex, Text, TabHeaders} from "components";
import styled, {css} from "styled-components";

const Hide = styled(Box)`
  transition: opacity 0.4s ease-in-out;
  visibility: hidden;
  height: 0;
  width: 0;
  opacity: 0;
  ${props =>
    props.showing &&
    css`
      height: 100%;
      width: 100%;
      opacity: 1;
      visibility: visible;
    `}
`;

const Menu = styled(Flex)`
  z-index: 10;
`;

const PanelNavigation = styled(Flex)`
  width: 7rem;
  height: 100%;
  flex-direction: column;
`;

// const PanelItem = styled(Box)``;

const NavigationTabItem = styled(Flex)`
  height: 7rem;
  padding: 1.75rem 0;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: border-left-color 0.275s ease;
  border-left: 3px solid;
  border-left-color: #e5e8ed;
  ${props =>
    props.active &&
    css`
      background: white;
      border-left-color: #8be48c;
    `}
`;

const Navigation = ({children}) => {
  return (
    <PanelNavigation pt={5} pb={5}>
      {children}
    </PanelNavigation>
  );
};

const Header = styled(Text)`
  transition: all 0.3s ease-in-out;
`;

const TabPanel = ({children}) => {
  return (
    <Box width="100%" margin={"0 auto"}>
      {children}
    </Box>
  );
};

class NavigationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 0
    };
  }

  getInitialState() {
    return {
      selected: this.props.selected || 0
    };
  }

  handleChange = index => {
    this.setState({selected: index});
  };

  render() {
    const {selected} = this.state;
    return (
      <React.Fragment>
        <TabHeaders bg="white">
          <Navigation>
            {this.props.tabHeaders.map((elem, index) => {
              const isActive = selected === index;
              const color = isActive ? "navys.0" : "greys.0";
              return (
                <NavigationTabItem
                  onClick={() => this.handleChange(index)}
                  color={"whites.0"}
                  key={index}
                  active={isActive}
                >
                  <Header fw={500} color={color}>
                    {elem}
                  </Header>
                </NavigationTabItem>
              );
            })}
          </Navigation>
        </TabHeaders>
        {this.props.children.map((elem, index) => (
          <Hide key={index} showing={selected === index}>
            {elem}
          </Hide>
        ))}
      </React.Fragment>
    );
  }
}

class VertTabs extends React.Component {
  render() {
    return (
      <Menu h="100%" bg="whites.0" p={3} pl={5} pr={5} m={0}>
        <NavigationTabs
          selected={0}
          tabHeaders={["Test 1", "Test 2", "Test 3"]}
          // tabHeaders={[<ImageIcon />, <EditIcon />, <LayoutIcon />]}
        >
          <TabPanel>test 1</TabPanel>
          <TabPanel>test 2</TabPanel>
          <TabPanel>test 3</TabPanel>
        </NavigationTabs>
      </Menu>
    );
  }
}

export default VertTabs;
