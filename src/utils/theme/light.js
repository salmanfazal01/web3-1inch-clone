import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2f8af5",
      grey1: "#F3F5FA",
    },
    background: {
      default: "#F1F2FB",
      dark: "#06070A",
      main: "#FFF",
    },
    text: {
      primary: "#222222",
      secondary: "#6C86AD",
    },
  },
  typography,
});

export default theme;
