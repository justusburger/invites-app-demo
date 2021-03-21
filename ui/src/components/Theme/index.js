import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export const Primary = "#FB7B12";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Primary,
    },
    secondary: {
      main: "#EEEEEE",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: "#fff",
        textTransform: "none",
        color: "inherit",
        borderRadius: 2,
        fontWeight: "600",
        font: "inherit",
      },

      containedPrimary: {
        color: "#fff",
        background: Primary,
      },

      containedSecondary: {
        color: "#565656",
        background: "#EEEEEE",
        "&:hover": {
          backgroundColor: "#e6e6e6",
        },
      },
    },
    MuiCard: {
      root: {
        borderRadius: 2,
      },
    },
  },
  props: {
    MuiCard: {},
  },
});

function CustomThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default React.memo(CustomThemeProvider);
