import { Box } from "@mui/material";
import React, { useState } from "react";
import LoadingRouter from "../components/LoadingRouter";
import SwapNavbar from "../components/Navbars/SwapNavbar";
import SwapBox from "../containers/SwapBox";

const Swap = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <LoadingRouter />;

  return (
    <div>
      {/* Navbar */}
      <SwapNavbar />

      {/* Box */}
      <Box sx={{ mt: 8 }}>
        <SwapBox />
      </Box>
    </div>
  );
};

export default Swap;
