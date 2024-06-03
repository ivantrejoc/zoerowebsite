import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    background: {
      default: "#121212"
    },

    text: {
      primary: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: ["Urbanist", "Neat Chalk", "Caveat Brush", "sans-serif"],
    fontSize: 16,
    h1: {
      fontFamily: "Urbanist",
      color: "#FFFFFF",
      fontSize: "11.5rem",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "90%"
    },

    h2: {
      fontFamily: "Urbanist",
      color: "#FFFFFF",
      fontSize: "3.125rem",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "100%"
    },

    h3: {
      fontFamily: "Urbanist",
      color: "#FFFFFF",
      fontSize: "1.875rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineheight: "112%"
    },

    h4: {
      fontFamily: "Urbanist",
      color: "#FFFFFF",
      fontSize: "1.875rem",
      fontStyle: "normal",
      fontWeight: "500",
      lineheight: "112%"
    },

    navLinks: {
      fontFamily: "Urbanist",
      color: "#AAAAAA",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      textDecoration: "none"
    },
    text: {
      fontFamily: "Urbanist",
      fontSize: "1.375rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "112%"
    },

    workPosition: {
      color: "#595959",
      fontFamily: "Urbanist",
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "112%"
    },
    formLabel: {
      color: "#FFF",
      fontFamily: "Urbanist",
      fontSize: "1.625rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "112%"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          strokeWidth: "6px",
          border: "solid 6px #22505D",
          borderRadius: "10px",
          background: "#121212",
          width: "30.125rem",
          height: "7.125rem",
          flexShrink: 0,
          color: "#FFF",
          fontFamily: "Urbanist",
          fontSize: "1.625rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "112%"
        }
      },
      dropDown: {
        style: {
          width: "6rem",
          height: "3rem"
        }
      }
    }
  },
  breakpoints: {
    values: {
      xxxxs: 276,
      xxxs: 321,
      xxs: 376,
      xs: 426,
      sm: 576,
      md: 769,
      lg: 993,
      xl: 1201,
      xxl: 1531,
      xxxl: 1711
    }
  },
  sizes: {
    header: 15,
    sidebar: 30
  }
});
