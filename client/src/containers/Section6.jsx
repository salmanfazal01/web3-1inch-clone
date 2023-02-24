import { Container, Grid } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import Image1 from "../assets/images/section6/aggregation-protocol.webp";
import Image2 from "../assets/images/section6/limit-order-protocol.webp";
import Image3 from "../assets/images/section6/liquidity-protocol.webp";
import Image4 from "../assets/images/section6/earn_1.webp";
import Image5 from "../assets/images/section6/rabbithole.webp";
import ServicesCard from "../components/ServicesCard";

const ITEMS = [
  {
    title: "Aggregation Protocol",
    subtitle:
      "Liquidity aggregation from multiple DEXes to ensure the best swap rates.",
    image: Image1,
  },
  {
    title: "Limit Order Protocol",
    subtitle:
      "The most innovative and flexible limit order functionality in DeFi.",
    image: Image2,
  },
  {
    title: "Liquidity Protocol",
    subtitle:
      "A next-generation AMM that offers capital efficiency to liquidity providers.",
    image: Image3,
  },
  {
    title: "1inch Earn",
    subtitle:
      "A derivative-based product offering liquidity providers attractive APYs.",
    image: Image4,
  },
  {
    title: "1inch RabbitHole",
    subtitle: "A feature that protects MetaMask users from sandwich attacks.",
    image: Image5,
  },
];

const Section6 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 30 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>
        1inch products
      </Title>

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

export default Section6;
