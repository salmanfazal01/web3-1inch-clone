import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import NewsImg from "../assets/images/section4/news-image.webp";
import Phone1Img from "../assets/images/section4/wallet-buy.webp";
import Phone2Img from "../assets/images/section4/wallet-stake.webp";
import Phone3Img from "../assets/images/section4/wallet-store.webp";
import Phone4Img from "../assets/images/section4/wallet-swap.webp";
import Phone5Img from "../assets/images/section4/wallet-transfer.webp";
import OutlinedButton from "../components/OutlinedButton";
import Title from "../components/Title";

const TABS = [
  {
    name: "Buy",
    image: Phone1Img,
    subtitle:
      "Buy crypto with your bank card using our partner fiat gateway providers.",
  },
  {
    name: "Store",
    image: Phone3Img,
    subtitle:
      "Your crypto is protected with the most sophisticated security measures.",
  },
  {
    name: "Transfer",
    image: Phone5Img,
    subtitle: "Transfer crypto in multiple blockchain networks.",
  },
  {
    name: "Swap",
    image: Phone4Img,
    subtitle: "Swap any amount of tokens at the best rates.",
  },
  {
    name: "Stake",
    image: Phone2Img,
    subtitle:
      "Stake 1INCH to participate in network governance and be eligible for gas costs refunds.",
  },
];

const Section4 = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container sx={{ mt: { xs: 15, md: 20, lg: 30 } }}>
      {/* Top */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>
              Never-ending liquidity
            </Title>

            <Typography sx={{ pb: 2 }} color="text.secondary">
              1inch instantly analyzes thousands of quotes and fees across
              multiple DEXes to provide users with the best rates.
            </Typography>

            <OutlinedButton text="Swap" arrow sx={{ width: "fit-content" }} />
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <img src={NewsImg} style={{ width: "100%", objectFit: "contain" }} />
        </Grid>
      </Grid>

      {/* Bottom */}
      <Grid
        container
        spacing={10}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: 10 }}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
            src={TABS[tabValue].image}
            style={{ width: "100%", objectFIt: "contain" }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Stack spacing={3} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>1inch DeFi Wallet</Title>

            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              scrollButtons="auto"
            >
              {TABS.map(({ name }) => (
                <Tab
                  label={name}
                  key={name}
                  sx={{
                    minWidth: 60,
                    "&.Mui-selected": { color: "text.primary" },
                  }}
                />
              ))}
            </Tabs>

            <Typography
              color="text.secondary"
              variant="body2"
              sx={{ pb: 3, minHeight: 78 }}
            >
              {TABS[tabValue].subtitle}
            </Typography>

            <OutlinedButton
              text="Learn more"
              arrow
              sx={{ width: "fit-content" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
