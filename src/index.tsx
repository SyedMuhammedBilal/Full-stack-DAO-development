import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import store from "./store";
import 'dotenv/config';

ReactDOM.render(
  <Provider store={store}>
    <MoralisProvider
      appId="PTAigFXOy6wEEgbAOfw0x09AkFWHwWH85zQSQXVe"
      serverUrl="https://azy1jldskncx.usemoralis.com:2053/server"
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </MoralisProvider>
  </Provider>,
  document.querySelector("#root")
);