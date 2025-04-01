import { createTheme } from "@mui/material/styles";

const fontFamily = `'Quicksand', sans-serif`;

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFB06B",
    },
    secondary: {
      main: "#78DAF9",
    },
    background: {
      default: "#FCFCFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2F2F2F",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
        },
      },
    },
  },
});
