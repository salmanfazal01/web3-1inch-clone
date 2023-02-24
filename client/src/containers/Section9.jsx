import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import Image1 from "../assets/images/section9/dao.webp";
import Image2 from "../assets/images/section9/token.webp";
import ServicesCard from "../components/ServicesCard";

const ITEMS = [
  {
    title: "1inch DAO",
    subtitle:
      "A governance tool that enables 1INCH stakers to vote for key protocol parameters.",
    image: Image1,
  },
  {
    title: "1INCH token",
    subtitle:
      "A token that facilitates 1inch protocol governance and participation in the network's evolution.",
    image: Image2,
  },
];

const Section9 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>
        Empowered by the community
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

export default Section9;
