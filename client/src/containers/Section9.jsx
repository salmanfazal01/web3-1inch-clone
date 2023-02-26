import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import ServicesCard from "../components/ServicesCard";
import { section9Content } from "../utils/content";

const { title, ITEMS } = section9Content;

const Section9 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>
        {title}
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
