import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { useSwapContext } from "../../../context/SwapContext";
import Title from "../../Title";

const LoadingPopup = () => {
  const theme = useTheme();
  const { loadingPopup, closeLoadingPopup } = useSwapContext();

  return (
    <Dialog
      onClose={closeLoadingPopup}
      open={!!loadingPopup}
      PaperProps={{
        elevation: 0,
        sx: { borderRadius: 5, p: 2, width: 420 },
      }}
      slotProps={{
        backdrop: {
          sx: {
            bgcolor: "rgba(108, 134, 173, 0.6)",
            backdropFilter: "blur(3px)",
          },
        },
      }}
    >
      <Stack alignItems="center">
        <Title variant={{ xs: "h6" }} sx={{ fontWeight: 500 }}>
          {loadingPopup?.title}
        </Title>

        <CircularProgress size="90px" thickness={1} sx={{ my: 6 }} />

        <Typography sx={{ mb: 5 }} color="text.secondary">
          {loadingPopup?.message}
        </Typography>

        <Button
          onClick={closeLoadingPopup}
          fullWidth
          sx={{
            borderRadius: 3,
            height: 48,
            color: "primary.main",
            bgcolor: "rgba(47, 138, 245, .16)",
            "&:hover": {
              bgcolor: "rgba(47, 138, 245, .3)",
            },
          }}
        >
          Close
        </Button>
      </Stack>
    </Dialog>
  );
};

export default LoadingPopup;
