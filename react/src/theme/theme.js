const theme = {
  breakpoints: [
    "20em",
    "23.4em",
    "26.6em",
    "32.5em",
    "40em",
    "48em",
    "52em",
    "60.625em",
    "75em"
  ],
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    sans:
      "-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, Fira Sans, system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    normal: 400,
    bold: 700
  },
  colors: {
    blacks: ["#000", "#090909"],
    whites: ["#fff", "#fafafa"],
    greys: ["#7D8B98", "#e6eaef", "#edeff0", "#F4F5F9"],
    oranges: ["#F87060"],
    greens: ["#596657", "#697268"],
    navys: ["#212C39", "#112237", "#525F81"],
    blues: ["#1C47F5"]
  },
  radii: [0, 2, 4],
  defaultProps: {
    transition: "all",
    transitionDuration: "0.3s"
  }
};

export default theme;
