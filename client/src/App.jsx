import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SwapPage from "./pages/Swap";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/swap" element={<SwapPage />} />
      </Routes>
    </div>
  );
};

export default App;
