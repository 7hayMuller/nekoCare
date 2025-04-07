// src/theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    indico: Palette["primary"];
  }

  interface PaletteOptions {
    indico?: PaletteOptions["primary"];
  }
}
