import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const OutlinedButton = ({ sx = {}, arrow, text, children, ...props }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 2,
        color: "text.primary",
        borderColor: "text.secondary",
        ...sx,
      }}
      {...props}
    >
      {children}
      {text}
      {arrow && <KeyboardArrowRightIcon fontSize="small" sx={{ ml: 0.5 }} />}
    </Button>
  );
};

export default OutlinedButton;
