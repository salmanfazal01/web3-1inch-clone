import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="ethereum">
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
