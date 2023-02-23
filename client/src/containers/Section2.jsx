import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import Title from "../components/Title";

const Component = ({
  before = "",
  after = "",
  counter,
  subtitle,
  decimals = false,
}) => (
  <Stack spacing={{ xs: 1, md: 2 }} alignItems="center">
    <CountUp prefix={before} suffix={after} end={counter} decimals={decimals}>
      {({ countUpRef }) => (
        <Title variant={{ xs: "h4", md: "h2" }} sx={{ fontWeight: 400 }}>
          <span ref={countUpRef} />
        </Title>
      )}
    </CountUp>
    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 300 }}>
      {subtitle}
    </Typography>
  </Stack>
);

const Section2 = () => {
  return (
    <Container sx={{ mt: { xs: -10, md: -5 } }}>
      <Box
        sx={(theme) => ({
          position: "relative",
          py: 5,
          [theme.breakpoints.up("sm")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              border: "2px solid transparent",
              borderRadius: "50px",
              background: "linear-gradient(180deg,grey,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            },
          },
        })}
      >
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          sx={{ zIndex: 20 }}
        >
          <Grid item xs={6} md={3}>
            <Component counter={345} subtitle="Liquidity sources" />
          </Grid>

          <Grid item xs={6} md={3}>
            <Component
              counter={345}
              before="$"
              after="B+"
              subtitle="Total volume"
            />
          </Grid>

          <Grid item xs={6} md={3}>
            <Component
              counter={4.4}
              after="M+"
              subtitle="Total wallets"
              decimals
            />
          </Grid>

          <Grid item xs={6} md={3}>
            <Component
              counter={28.7}
              after="M+"
              subtitle="Total Trades"
              decimals
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Section2;
