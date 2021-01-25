import React from "react";
import { Provider } from "react-redux";
import DevTools from "./devTools";
import StyledContainer from "../components/StyledContainer";
import GlobalStyle from "../injectGlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./../constants/theme";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./../components/App";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "../store";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore} loading={null}>
        <ThemeProvider theme={theme}>
          <StyledContainer>
            <Router>
              <ToastContainer />
              <App />
            </Router>
            <GlobalStyle />
            <DevTools />
          </StyledContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default Root;
