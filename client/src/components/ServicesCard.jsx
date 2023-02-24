import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import OutlinedButton from "./OutlinedButton";
import Title from "./Title";

const ServicesCard = ({ title, subtitle, image }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        p: 4,
        borderRadius: "30px",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          border: "1px solid transparent",
          background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Title variant={{ xs: "h5", sm: "h4" }} sx={{ mb: 1 }}>
        {title}
      </Title>

      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>

      <img
        src={image}
        style={{
          height: "280px",
          width: "100%",
          objectFit: "contain",
          flex: 1,
        }}
      />

      <OutlinedButton text="Learn more" arrow sx={{ width: "fit-content" }} />
    </Box>
  );
};

export default ServicesCard;
