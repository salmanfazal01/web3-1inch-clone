import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { NAVBAR_HEIGHT } from "../../constants";
import { navbarContent } from "../../utils/content";
import ConnectButton from "../Buttons/ConnectButton";

const { LogoBlack } = navbarContent;

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const SwapNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        py: 1,
        height: NAVBAR_HEIGHT,
        bgcolor: "transparent",
        // bgcolor: scrollPosition > 10 ? "transparent" : "transparent",
        // backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          spacing={5}
        >
          {/* Logo */}
          <img
            src={LogoBlack}
            style={{ height: "100%", objectFit: "contain" }}
          />

          {/* Links */}
          {!isMobile ? (
            <Stack
              direction="row"
              alignItems="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton>
                <Typography variant="body2">Trade</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">DAO</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">Earn</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">More</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">Bridges</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton spacing={0.5}>
                <Typography variant="body2">Buy Crypto</Typography>
              </LinkButton>
            </Stack>
          ) : (
            <Box sx={{ flex: 1 }} />
          )}

          <ConnectButton fit wallet size="small" sx={{ borderRadius: 3 }} />

          {/* Action Buttons */}
          {isMobile && (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default SwapNavbar;
