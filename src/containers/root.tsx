import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import DevTools from "./devTools";
import StyledContainer from "../components/StyledContainer";
import GlobalStyle from "../injectGlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./../constants/theme";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./../components/App";

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <Router>
            <App />
          </Router>
          <GlobalStyle />
          <DevTools />
        </StyledContainer>
      </ThemeProvider>
    </Provider>
  );
};
export default Root;
