import { Box, Container, Stack, keyframes } from "@mui/material";
import React from "react";
import LoadingLogo from "../../assets/images/loading-logo.svg";

const animate = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.2, 1.2);
  }

  50% {
    opacity: 1;
    transform: scale(0.7, 0.7);
  }

  100% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }
`;

const LoadingRouter = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", width: "100vw" }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            animation: `${animate} 3s infinite ease`,
          }}
        >
          <img
            src={LoadingLogo}
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Container>
    </Stack>
  );
};

export default LoadingRouter;
