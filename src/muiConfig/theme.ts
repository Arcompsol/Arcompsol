import { colors } from "@/styles/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    dimGray: string;
    blueWhale: string;
  }
}

export const theme = createTheme({
  palette: {
    common: {
      dimGray: colors.dimGray,
      blueWhale: colors.blueWhale,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
