import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import Image1 from "../assets/images/section7/api.webp";
import Image2 from "../assets/images/section7/grant-program.webp";
import ServicesCard from "../components/ServicesCard";

const ITEMS = [
  {
    title: "1inch API",
    subtitle:
      "A cutting-edge discovery and routing algorithm that offers non-custodial asset swaps at the most attractive rates in major DeFi ecosystems.",
    image: Image1,
  },
  {
    title: "1inch grant program",
    subtitle:
      "An initiative that fosters the 1inch Network's growth and incentivizes contributions through grants and other resources.",
    image: Image2,
  },
];

const Section7 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 2 }}>
        Grow with our ecosystem
      </Title>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: { xs: 5, md: 8 } }}
      >
        Build solutions alongside decentralized finance leaders
      </Typography>

      <Grid container spacing={3}>
        {ITEMS.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <ServicesCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section7;
