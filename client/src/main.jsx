import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import { StateContextProvider } from "./context";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Router>
          <StateContextProvider>
            <CssBaseline />
            <App />
          </StateContextProvider>
        </Router>
      </ThirdwebProvider>
    </ThemeProvider>
  </React.StrictMode>
);
