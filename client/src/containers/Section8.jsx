import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import OutlinedButton from "../components/OutlinedButton";
import Title from "../components/Title";
import { section8Content } from "../utils/content";

const { title, subtitle, caption, ShieldImage } = section8Content;

const Section8 = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ mt: { xs: 10, md: 20, lg: 25 }, textAlign: "center" }}
    >
      <Stack alignItems="center">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 2 }}>
          {title}
        </Title>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: { xs: 5, md: 8 } }}
        >
          {subtitle}
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
          {caption}
        </Typography>

        <OutlinedButton text="Learn more" arrow sx={{ width: "fit-content" }} />
      </Stack>
    </Container>
  );
};

export default Section8;
