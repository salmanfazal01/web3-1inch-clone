import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const LaunchButton = ({ sx = {}, ...props }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      sx={{ borderRadius: 4, ...sx }}
      onClick={() => navigate("/swap")}
      {...props}
    >
      Launch dApp
      <KeyboardArrowRightIcon />
    </Button>
  );
};

export default LaunchButton;
