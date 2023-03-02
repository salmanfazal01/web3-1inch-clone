import AddIcon from "@mui/icons-material/Add";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ConnectButton from "../components/Buttons/ConnectButton";
import PriceBox from "../components/PriceBox";
import { useSwapContext } from "../context/SwapContext";

const SwapBox = () => {
  const {
    address,
    switchTokens,
    quote,
    getQuote,
    quantity,
    fromToken,
    swapTokens,
    hasAllowance,
    toToken,
  } = useSwapContext();

  const [tabValue, setTabValue] = useState(0);

  return (
    <Container
      maxWidth="xs"
      sx={{ maxWidth: "480px!important", position: "relative" }}
    >
      <Paper
        elevation={0}
        sx={{
          minHeight: 400,
          width: "100%",
          borderRadius: 5,
          pt: 1,
          pb: 2,
          px: 2,
          boxShadow: "0 12px 24px #E2E9F6",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Tabs */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Tabs
            value={tabValue}
            indicatorColor="transparent"
            sx={(theme) => ({
              "& .Mui-selected": {
                color: `${theme.palette.text.primary}!important`,
              },
            })}
          >
            <Tab label="Swap" sx={{ minWidth: 0 }} />
            <Tab label="Limit" sx={{ minWidth: 0 }} disabled />
            <Tab label="P2P" sx={{ minWidth: 0 }} disabled />
          </Tabs>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton size="small">
              <RefreshIcon fontSize="small" />
            </IconButton>

            <IconButton size="small">
              <AddIcon fontSize="small" />
            </IconButton>

            <IconButton size="small">
              <DragHandleIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        {/* Content */}
        <Stack spacing={1.5} sx={{ flex: 1, mb: 3 }} alignItems="center">
          <PriceBox style="background" maxButton type="from" />

          <IconButton
            onClick={switchTokens}
            sx={{
              border: "1px solid",
              borderColor: "primary.grey1",
              height: 25,
              width: 25,
              mt: "-10px!important",
              mb: "-20px!important",
              bgcolor: "white",
              boxShadow:
                "0 0 4px rgba(71, 73, 79, .1), 0 1px 2px rgba(71, 73, 79, .25)",
            }}
          >
            <FlipCameraAndroidIcon
              sx={{ fontSize: 16, color: "primary.main" }}
            />
          </IconButton>

          <PriceBox style="border" type="to" />

          {/* Fees */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            spacing={1}
            sx={{
              bgcolor: "primary.grey1",
              borderRadius: 3,
              py: 1.5,
              px: 1,
              width: "100%",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <InfoOutlinedIcon sx={{ fontSize: 15, mr: 0.5 }} />
              <Box component="span" sx={{ color: "text.primary", mr: 0.4 }}>
                {quantity} {fromToken?.name} = {quote?.to} {toToken?.name}
              </Box>
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocalGasStationOutlinedIcon
                sx={{ fontSize: 18, mr: 0.5, color: "primary.main" }}
              />
              {quote?.requiredEth} Ξ
            </Typography>
          </Stack>
        </Stack>

        {!address ? (
          <ConnectButton
            wallet
            sx={{ borderRadius: 2, height: 48, fontWeight: 500 }}
          />
        ) : (
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              fullWidth
              variant="outlined"
              onClick={getQuote}
              disabled={!quantity || quantity <= 0}
            >
              Get Quote
            </Button>

            <Button
              onClick={swapTokens}
              variant="outlined"
              fullWidth
              disabled={!quote?.estimatedGas}
              sx={{
                color: "primary.main",
                bgcolor: "rgba(47, 138, 245, .16)",
                "&:hover": {
                  bgcolor: "rgba(47, 138, 245, .3)",
                },
              }}
            >
              {hasAllowance ? "Swap" : "Allow and Swap"}
            </Button>
          </Stack>
        )}
      </Paper>
    </Container>
  );
};

export default SwapBox;
