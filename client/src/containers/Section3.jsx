import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import EthImg from "../assets/images/section3/eth.webp";
import BscImg from "../assets/images/section3/bsc.webp";
import PolygonImg from "../assets/images/section3/polygon.webp";
import OptimismImg from "../assets/images/section3/optimism.webp";
import GnosisImg from "../assets/images/section3/gnosis.webp";
import AvalancheImg from "../assets/images/section3/avalanche.webp";
import ArbitrumImg from "../assets/images/section3/arbitrum.webp";
import FantomImg from "../assets/images/section3/fantom.webp";
import KlaytnImg from "../assets/images/section3/klaytn.webp";
import AuroraImg from "../assets/images/section3/aurora.webp";

const ITEMS = [
  { logo: EthImg, name: "Ethereum" },
  { logo: BscImg, name: "BNB Chain" },
  { logo: PolygonImg, name: "Polygon" },
  { logo: OptimismImg, name: "Optimism" },
  { logo: GnosisImg, name: "Gnosis" },
  { logo: AvalancheImg, name: "Avalanche" },
  { logo: ArbitrumImg, name: "Arbitrum" },
  { logo: FantomImg, name: "Fantom" },
  { logo: KlaytnImg, name: "Klaytn" },
  { logo: AuroraImg, name: "Aurora" },
];

const Section3 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 18 } }}>
      <Container maxWidth="md">
        <Title
          variant={{ xs: "h3", md: "h2" }}
          sx={{ textAlign: "center!important" }}
        >
          Optimize your trades across hundreds of DEXes on multiple networks
        </Title>
      </Container>

      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {ITEMS.map(({ name, logo }) => (
          <Grid item xs={4} md={3} lg={2.4} key={name}>
            <Stack alignItems="center">
              <img
                src={logo}
                style={{ height: "120px", objectFit: "contain" }}
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

export default Section3;
