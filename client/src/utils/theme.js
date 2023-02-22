import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E200A6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#121128",
      paper: "#1A162C",
      card: "#262143",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
