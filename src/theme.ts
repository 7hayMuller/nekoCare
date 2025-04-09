import { createTheme } from "@mui/material/styles";

const fontFamily = `'Quicksand', sans-serif`;

declare module "@mui/material/styles" {
  interface Palette {
    indico: Palette["primary"];
    rose: Palette["primary"];
    lime: Palette["primary"];
    googleRed: Palette["primary"];
    appleBlack: Palette["primary"];
  }

  interface PaletteOptions {
    indico?: PaletteOptions["primary"];
    rose?: PaletteOptions["primary"];
    lime?: PaletteOptions["primary"];
    googleRed?: PaletteOptions["primary"];
    appleBlack?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFB06B",
    },
    secondary: {
      main: "#78DAF9",
    },
    indico: { main: "#7C77B9" },
    rose: { main: "#C33C54" },
    lime: { main: "#BCED09" },
    googleRed: { main: "#DB4437" },
    appleBlack: { main: "#1D1D1F" },
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: "hidden",
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: "12px",
        },
        standardSuccess: {
          border: "1px solid lime ",
          backgroundColor: "paper",
          color: "#2F2F2F",
        },
        standardError: {
          border: "1px solid #C33C54",
          backgroundColor: "#FFFFFF",
          color: "#2F2F2F",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7C77B9",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#7C77B9",
          },
        },
      },
    },
  },
});
