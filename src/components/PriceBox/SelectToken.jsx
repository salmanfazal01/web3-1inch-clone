import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSwapContext } from "../../context/SwapContext";
import Title from "../Title";

const SelectToken = ({ style, sx = {}, type = "from" }) => {
  const { tokens, fromToken, setFromToken, toToken, setToToken, switchTokens } =
    useSwapContext();

  const token = type === "from" ? fromToken : toToken;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTokens, setSearchedTokens] = useState([]);
  const [selecting, setSelecting] = useState(false);

  const handleChange = (item) => {
    if (type === "from") {
      item.symbol === toToken.symbol ? switchTokens() : setFromToken(item);
    } else {
      item.symbol === fromToken.symbol ? switchTokens() : setToToken(item);
    }
    setSelecting(false);
  };

  useEffect(() => {
    if (searchTerm) {
      const _searched = tokens.filter(
        (i) =>
          i.name?.toLowerCase()?.includes?.(searchTerm?.toLowerCase()) ||
          i.symbol?.toLowerCase()?.includes?.(searchTerm?.toLowerCase()) ||
          i.address?.toLowerCase()?.includes?.(searchTerm?.toLowerCase())
      );

      setSearchedTokens(_searched);
    } else {
      setSearchedTokens(tokens);
    }
  }, [searchTerm, tokens]);

  if (selecting) {
    return (
      <Paper
        sx={{
          position: "absolute",
          minHeight: 400,
          maxHeight: 680,
          display: "flex",
          flexDirection: "column",
          borderRadius: 5,
          p: 2,
          top: 0,
          left: "16px",
          right: "16px",
          boxShadow: "0 12px 24px #E2E9F6",
          zIndex: 10,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ position: "relative", mb: 2 }}
        >
          <IconButton
            size="small"
            onClick={() => setSelecting(false)}
            sx={{ position: "absolute" }}
          >
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>

          <Title variant={{ xs: "h5" }} sx={{ flex: 1, textAlign: "center" }}>
            Select a token
          </Title>
        </Stack>

        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="filled"
          placeholder="Search by name or paste address"
          hiddenLabel
          fullWidth
          sx={{ mb: 2 }}
          InputProps={{
            sx: {
              borderRadius: 3,
              height: 51,
              px: 2.5,
              bgcolor: "primary.grey1",
            },
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start" sx={{ pr: 0.5 }}>
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <Box
          sx={{
            flex: 1,
            overflowY: "overlay",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: 5,
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#EBEFFA",
            },
          }}
        >
          <List sx={{ overflowY: "auto" }}>
            {searchedTokens.map((item, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton
                  onClick={() => handleChange(item)}
                  selected={toToken?.symbol === item.symbol}
                  disabled={token?.symbol === item?.symbol}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: "100%" }}
                  >
                    <Avatar src={item.logoURI} />

                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2">{item.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.symbol}
                      </Typography>
                    </Box>

                    {/* <Typography>{0}</Typography> */}
                  </Stack>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    );
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        cursor: "pointer",
        borderRadius: 3,
        px: 1.2,
        py: 0.8,
        "&:hover": {
          bgcolor: style == "grey" ? "primary.grey1" : "background.main",
        },
        ...sx,
      }}
      onClick={() => setSelecting(true)}
    >
      <Avatar src={token.logoURI} sx={{ height: 24, width: 24 }} />

      <Title sx={{ fontWeight: 400, pl: 1.5, fontSize: "20px" }}>
        {token.symbol}
      </Title>

      <KeyboardArrowDownIcon
        fontSize="small"
        sx={{ ml: 0.5, color: "text.secondary" }}
      />
    </Stack>
  );
};

export default SelectToken;

// {
//   "symbol": "BTC++",
//   "name": "PieDAO BTC++",
//   "decimals": 18,
//   "address": "0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd",
//   "logoURI": "https://tokens.1inch.io/0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd.png",
//   "tags": [
//       "tokens",
//       "PEG:BTC"
//   ]
// }
