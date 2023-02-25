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
import { NAVBAR_HEIGHT } from "../constants";
import Logo from "../assets/images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import LaunchButton from "./LaunchButton";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import useScrollPosition from "../hooks/useScrollPosition";

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{
      color: "text.secondary",
      cursor: "pointer",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const HomepageNavbar = () => {
  const scrollPosition = useScrollPosition();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        height: `${NAVBAR_HEIGHT}px`,
        py: 1,
        backgroundColor:
          scrollPosition > 10 ? "rgba(7, 7, 16, 0.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
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
        >
          {/* Logo */}
          <img src={Logo} style={{ height: "100%", objectFit: "contain" }} />

          {/* Links */}

          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton spacing={0.2}>
                <Typography variant="body2">Products</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton spacing={0.2}>
                <Typography variant="body2">Developers</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton spacing={0.2}>
                <Typography variant="body2">Governance</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton spacing={0.2}>
                <Typography variant="body2">About</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton spacing={0.2}>
                <Typography variant="body2">Blog</Typography>
                <CallMadeIcon sx={{ fontSize: 20, pb: 1 }} />
              </LinkButton>
            </Stack>
          )}

          {/* Actions */}
          {!isMobile && (
            <Stack direction="row" spacing={5} alignItems="center">
              <LinkButton>
                <LanguageIcon fontSize="small" />
                <Typography variant="body2">EN</Typography>
              </LinkButton>

              <LaunchButton sx={{ borderRadius: 3 }} />
            </Stack>
          )}

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

export default HomepageNavbar;
