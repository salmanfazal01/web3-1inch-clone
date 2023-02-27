import { Container, IconButton, Paper, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const SwapBox = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container maxWidth="xs" sx={{ maxWidth: "480px!important" }}>
      <Paper sx={{ height: 400, width: "100%", borderRadius: 5, p: 1 }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Tabs
            value={tabValue}
            indicatorColor="transparent"
            sx={{
              "& .Mui-selected": { color: "text.primary" },
            }}
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
      </Paper>
    </Container>
  );
};

export default SwapBox;
