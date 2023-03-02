import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Button } from "@mui/material";
import React from "react";
import { useSwapContext } from "../../context/SwapContext";
import { smallerString } from "../../utils/helpers";

const ConnectButton = ({ sx = {}, wallet, children, fit, ...props }) => {
  const { address, connect } = useSwapContext();

  return (
    <Button
      variant="contained"
      disableElevation
      fullWidth={!fit}
      sx={{
        fontWeight: 400,
        color: "primary.main",
        bgcolor: "rgba(47, 138, 245, .16)",
        width: fit ? "fit-content" : "100%",
        "&:hover": {
          bgcolor: "rgba(47, 138, 245, .3)",
        },
        ...sx,
      }}
      onClick={connect}
      {...props}
    >
      {wallet && (
        <AccountBalanceWalletOutlinedIcon fontSize="small" sx={{ mr: 0.7 }} />
      )}
      {address ? smallerString(address) : "Connect Wallet"}
    </Button>
  );
};

export default ConnectButton;
