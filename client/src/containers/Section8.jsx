import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ShieldImage from "../assets/images/section8/shield.webp";
import OutlinedButton from "../components/OutlinedButton";
import Title from "../components/Title";

const Section8 = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ mt: { xs: 10, md: 20, lg: 25 }, textAlign: "center" }}
    >
      <Stack alignItems="center">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 2 }}>
          Your decentralized finance shield
        </Title>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: { xs: 5, md: 8 } }}
        >
          1inch uses sophisticated security measures to protect users' funds in
          swaps on other DeFi protocols
        </Typography>

        <Box sx={{ px: { xs: 2, md: 5, lg: 7 } }}>
          <img
            src={ShieldImage}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: { xs: 5, md: 8 }, mb: 2.5 }}
        >
          1inch is the most audited project in DeFi. See a list of the most
          important smart contract audits here.
        </Typography>

        <OutlinedButton text="Learn more" arrow sx={{ width: "fit-content" }} />
      </Stack>
    </Container>
  );
};

export default Section8;
