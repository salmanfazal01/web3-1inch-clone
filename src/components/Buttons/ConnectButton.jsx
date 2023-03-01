import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Button } from "@mui/material";
import React from "react";
import { useSwapContext } from "../../context/SwapContext";

const smallerString = (_string, firstN = 5, lastN = -4, numOfDots = 4) => {
  const _first = _string.slice(0, firstN);
  const _last = _string.slice(lastN);

  return `${_first}${Array(numOfDots).join(".")}${_last}`;
};

const ConnectButton = ({ sx = {}, wallet, children, fit, ...props }) => {
  const { address, connect } = useSwapContext();

  return (
    <Button
      variant="contained"
      disableElevation
      fullWidth={!fit}
      sx={{
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
      {wallet && <AccountBalanceWalletOutlinedIcon sx={{ mr: 0.7 }} />}
      {address ? smallerString(address) : "Connect Wallet"}
    </Button>
  );
};

export default ConnectButton;
