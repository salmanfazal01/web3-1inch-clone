import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import lightTheme from "../src/utils/theme/light";
import darkTheme from "../src/utils/theme/dark";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SwapContextProvider } from "./context/SwapContext";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Home />
            </ThemeProvider>
          }
        />

        <Route
          path="/swap"
          element={
            <SwapContextProvider>
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Swap />
              </ThemeProvider>
            </SwapContextProvider>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
