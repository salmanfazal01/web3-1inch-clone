import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import BgImage from "../assets/images/section5/news-block-background.webp";
import OutlinedButton from "../components/OutlinedButton";
import Title from "../components/Title";
import BgImageMobile from "../assets/images/section5/news-block-background-mobile.webp";

const Section5 = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        mt: { xs: 10, md: 20, lg: 25 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          background: `url(${BgImageMobile})`,
          backgroundSize: "cover",
          py: 5,
          borderRadius: "30px",
          [theme.breakpoints.up("sm")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "30px",
              border: "1px solid transparent",
              background:
                "linear-gradient(120deg,#5f5f61,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            },
          },
          [theme.breakpoints.up("md")]: {
            background: `url(${BgImage})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
            py: 0,
          },
        }}
      >
        <Grid container flexWrap="wrap-reverse" sx={{ px: { xs: 5, md: 8 } }}>
          <Grid item xs={12} md={5} lg={4}>
            <Stack spacing={2} justifyContent="center" sx={{ height: "100%" }}>
              <Title variant={{ xs: "h3", md: "h2" }}>1inch Fusion</Title>

              <Typography variant="body2" color="text.secondary" sx={{ pb: 3 }}>
                The Fusion upgrade makes swaps on 1inch yet more efficient and
                secure, combining liquidity from the entire crypto market in one
                place.
              </Typography>

              <OutlinedButton
                text="Learn more"
                arrow
                sx={{ [theme.breakpoints.up("md")]: { width: "fit-content" } }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
            <Box sx={{ height: 400 }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Section5;
