import { Box, Container, Grid } from "@mui/material";
import React from "react";
import OutlinedButton from "../components/OutlinedButton";
import Title from "../components/Title";
import { Section11Content } from "../utils/content";

const { title, ITEMS } = Section11Content;

const Section11 = () => {
  return (
    <Container sx={{ my: { xs: 10, md: 20, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>
        {title}
      </Title>

      <Grid
        container
        spacing={3}
        rowSpacing={6}
        sx={{ mb: 10, position: "relative" }}
      >
        {ITEMS.map(({ link, image }) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={link}>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  filter: "contrast(50%)",
                },
              }}
            >
              <img
                src={image}
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        ))}

        <Box
          sx={{
            position: "absolute",
            background: "linear-gradient(180deg, #06070a85, #06070a)",
            bottom: 0,
            right: 0,
            left: 0,
            height: 80,
          }}
        ></Box>
      </Grid>

      <OutlinedButton text="Explore ecosystem" arrow />
    </Container>
  );
};

export default Section11;
