import { Container, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";

const Section3 = () => {
  return (
    <Container sx={{ mt: { xs: 5, md: 15 } }}>
      <Container maxWidth="md">
        <Title
          variant={{ xs: "h3", md: "h2" }}
          sx={{ textAlign: "center!important" }}
        >
          Optimize your trades across hundreds of DEXes on multiple networks
        </Title>
      </Container>
    </Container>
  );
};

export default Section3;
