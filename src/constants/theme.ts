//place values used more than once in here, then call the themeProvider in your root component and pass this theme as prop, check your root.ts.
//After that other components can now call this theme keys as prop..., check src/components/StyledContainer.ts

const theme = {
  primaryBg: "#333852",
  secondaryBg: "#282A31",
  posterWidth: "127px",
  posterHeight: "191px",
};

export default theme;
