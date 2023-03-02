import { Box, Stack, TextField, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useSwapContext } from "../../context/SwapContext";
import SelectToken from "./SelectToken";
import { useBalance } from "@thirdweb-dev/react";

const PriceBox = ({
  maxButton,
  style = "border",
  estimatedPrice = "0.00",
  type = "from",
}) => {
  const { fromToken, toToken, quantity, setQuantity, quote } = useSwapContext();
  const theme = useTheme();

  const token = type === "from" ? fromToken : toToken;

  const { data } = useBalance(token.address);

  const balance = data?.displayValue || "0.00";

  return (
    <Box
      sx={{
        py: 0.5,
        px: 2,
        borderRadius: 4,
        border: `2px solid ${theme.palette.primary.grey1}`,
        bgcolor: style === "background" && "primary.grey1",
        width: "100%",
      }}
    >
      {/* Row 1 */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="caption" color="text.secondary">
          You {type === "from" ? "sell" : "buy"}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          Balance:{" "}
          {parseFloat(balance)
            ?.toFixed(5)
            .replace(/\.?0+$/, "")}
          {maxButton && (
            <Box
              onClick={() => setQuantity(balance)}
              component="span"
              sx={{
                ml: 0.5,
                p: 0.2,
                cursor: "pointer",
                color: "primary.main",
                fontWeight: 600,
              }}
            >
              MAX
            </Box>
          )}
        </Typography>
      </Stack>

      {/* Row 2 */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ my: 0.3 }}
      >
        <SelectToken
          style={style === "background" ? "white" : "grey"}
          sx={{ ml: -1.2 }}
          token={token}
          type={type}
        />

        {type === "from" ? (
          <TextField
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            variant="standard"
            InputProps={{
              sx: { fontSize: { xs: 20, sm: 24 } },
              inputProps: {
                style: { textAlign: "right" },
              },
              disableUnderline: true,
            }}
          />
        ) : (
          <Typography sx={{ fontSize: { xs: 20, sm: 24 } }}>
            {quote?.to || 0}
          </Typography>
        )}
      </Stack>

      {/* Row 3 */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="caption" color="text.secondary">
          {token.name}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          ~${estimatedPrice}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PriceBox;
