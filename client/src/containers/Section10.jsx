import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import DiscordImage from "../assets/images/section10/discord.webp";
import RedditImage from "../assets/images/section10/reddit.webp";
import TelegramImage from "../assets/images/section10/telegram.webp";
import TwitterImage from "../assets/images/section10/twitter.webp";
import ServicesCard from "../components/ServicesCard";

const SOCIALS = [
  { name: "Telegram", image: TelegramImage },
  { name: "Discord", image: DiscordImage },
  { name: "Reddit", image: RedditImage },
  { name: "Twitter", image: TwitterImage },
];

const Section10 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title
        variant={{ xs: "h3", md: "h2" }}
        sx={{ textAlign: "center", mb: { xs: 5 } }}
      >
        Join us
      </Title>

      <Grid container spacing={3} justifyContent="center">
        {SOCIALS.map(({ name, image }) => (
          <Grid
            item
            xs={6}
            md={3}
            key={name}
            sx={(theme) => ({
              cursor: "pointer",
              "& :hover": {
                "& img": {
                  transition: "transform .3s",
                  transform: "scale(1.2)",
                },
                "& p": {
                  transition: "all .3s ease-in",
                  color: `${theme.palette.text.primary} !important`,
                },
              },
            })}
          >
            <Stack alignItems="center">
              <img
                src={image}
                style={{ width: "120px", objectFit: "contain" }}
              />

              <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section10;
