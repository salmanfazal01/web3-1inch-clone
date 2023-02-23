import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Hidden,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MainBG from "../assets/images/section1/main-bg-0_1.webp";
import TreesImage from "../assets/images/section1/main-bg-1_1.webp";
import CliffImage from "../assets/images/section1/main-bg-2_1.webp";
import HorseImage from "../assets/images/section1/main-bg-3.png";
import ShootingStarImage from "../assets/images/section1/main-bg-0-0.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Title from "../components/Title";
import { NAVBAR_HEIGHT } from "../constants";

const Section1 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* Main Background */}
      {/* <Box
        sx={{
          position: "fixed",
          zIndex: -10,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <img src={MainBG} style={{ width: "100%" }} />
        
      </Box> */}

      <Box
        sx={{
          display: "block",
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
      >
        <img
          src={ShootingStarImage}
          style={{
            position: "absolute",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />

        <img src={MainBG} style={{ width: "100%" }} />

        {/* Trees */}
        <Hidden mdDown>
          <img
            src={TreesImage}
            style={{
              width: "100%",
              position: "absolute",
              right: 0,
              left: 0,
              bottom: 0,
              willChange: "transform",
              transform: "translate3d(0px, 7px, 0px)",
            }}
          />
        </Hidden>

        {/* Cliff */}
        <img
          src={CliffImage}
          style={{
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            // bottom: 0,
            backgroundSize: "cover",
          }}
        />

        {/* Horse */}
        <img
          src={HorseImage}
          style={{
            position: "absolute",
            height: "40%",
            right: "14%",
            bottom: "45%",
            transform: "rotate(7deg)",
          }}
        />
      </Box>

      {/* Content */}
      <Container
        sx={{
          height: "80vh",
          // position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // mt: -5,
        }}
      >
        <Title
          variant={{ xs: "h3", sm: "h2", md: "h1" }}
          // sx={{ letterSpacing: "0.01em", mb: 2, fontWeight: 800 }}
        >
          One-stop access
        </Title>

        <Title
          variant={{ xs: "h4", sm: "h3", md: "h2" }}
          sx={{ fontWeight: "500", letterSpacing: "0.05em", mb: 6 }}
        >
          to decentralized finance
        </Title>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: 4, height: 58 }}
          >
            Launch dApp
            <KeyboardArrowRightIcon fontSize="small" />
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: 4,
              color: "text.primary",
              borderColor: "text.primary",
              px: 2,
              height: 58,
            }}
          >
            <AppleIcon sx={{ fontSize: 32 }} />

            <Stack sx={{ ml: 1, textAlign: "left" }}>
              <Typography variant="caption">Download on the</Typography>
              <Typography variant="h5">App Store</Typography>
            </Stack>
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: 4,
              color: "text.primary",
              borderColor: "text.primary",
              px: 2,
              height: 58,
            }}
          >
            <GoogleIcon sx={{ fontSize: 32 }} />

            <Stack sx={{ ml: 1, textAlign: "left" }}>
              <Typography variant="caption">Get it on</Typography>
              <Typography variant="h5">Google Play</Typography>
            </Stack>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section1;
