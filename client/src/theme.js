import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E3A8A", // Navy Blue (Navbar background)
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#22C55E", // Green (Add Idea button)
      contrastText: "#FFFFFF",
    },
     background: {
      default: "#F9FAFB",
      footer: "#111827", // Dark gray / black
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
      footer: "#FFFFFF",
    },
  },
   custom: {
    gradients: {
      pageBackground: "linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)",
    },
  },
});

export default theme;
