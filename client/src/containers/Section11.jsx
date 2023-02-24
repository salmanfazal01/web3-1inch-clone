import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import Near from "../assets/images/section11/near.svg";
import Metamask from "../assets/images/section11/metamask.svg";
import Trustwallet from "../assets/images/section11/trustwallet.svg";
import Opium from "../assets/images/section11/opium.svg";
import Zerion from "../assets/images/section11/zerion.svg";
import Revolut from "../assets/images/section11/revolut.svg";
import Pantera from "../assets/images/section11/pantera.svg";
import Binancelab from "../assets/images/section11/binance-lab.svg";
import Dragonflycapital from "../assets/images/section11/dragonfly-capital.svg";
import Galaxydigital from "../assets/images/section11/galaxy-digital.svg";
import Paraficapital from "../assets/images/section11/parafi-capital.svg";
import Gemini from "../assets/images/section11/gemini.svg";
import Mew from "../assets/images/section11/mew.svg";
import Atoken from "../assets/images/section11/atoken.svg";
import Dappradar from "../assets/images/section11/dappradar.svg";
import Graph from "../assets/images/section11/graph.svg";
import Staker from "../assets/images/section11/staker.svg";
import Bitpay from "../assets/images/section11/bitPay.svg";
import OutlinedButton from "../components/OutlinedButton";

const ITEMS = [
  {
    link: "https://near.org/",
    image: Near,
  },
  {
    link: "https://metamask.io/",
    image: Metamask,
  },
  {
    link: "https://trustwallet.com/",
    image: Trustwallet,
  },
  {
    link: "https://opium.network/",
    image: Opium,
  },
  {
    link: "https://zerion.io/",
    image: Zerion,
  },
  {
    link: "https://www.revolut.com/",
    image: Revolut,
  },
  {
    link: "https://panteracapital.com/",
    image: Pantera,
  },
  {
    link: "https://labs.binance.com/",
    image: Binancelab,
  },
  {
    link: "https://www.dcp.capital/",
    image: Dragonflycapital,
  },
  {
    link: "https://www.galaxydigital.io/",
    image: Galaxydigital,
  },
  {
    link: "https://www.parafi.capital/",
    image: Paraficapital,
  },
  {
    link: "https://www.gemini.com/frontier-fund",
    image: Gemini,
  },
  {
    link: "https://www.myetherwallet.com/",
    image: Mew,
  },
  {
    link: "https://www.atoken.com/",
    image: Atoken,
  },
  {
    link: "https://dappradar.com/",
    image: Dappradar,
  },
  {
    link: "https://thegraph.com/",
    image: Graph,
  },
  {
    link: "https://staker.app/",
    image: Staker,
  },
  {
    link: "https://bitpay.com/",
    image: Bitpay,
  },
];

const Section11 = () => {
  return (
    <Container sx={{ my: { xs: 10, md: 20, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>
        Partners and stakeholders
      </Title>

      <Grid container spacing={3} rowSpacing={6} sx={{ mb: 4 }}>
        {ITEMS.map(({ link, image }) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={link}>
            <img
              src={image}
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
          </Grid>
        ))}
      </Grid>

      <OutlinedButton text="Explore ecosystem" arrow />
    </Container>
  );
};

export default Section11;
