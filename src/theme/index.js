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
    fontFamily: ["Urbanist", "Neat Chalk", "sans-serif"],
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

    navLinks: {
      fontFamily: "Urbanist",
      color: "#AAAAAA",      
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      textDecoration: "none"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          fill: "#121212",
          strokeWidth: "6px",
          stroke: "#22505D",
          width: "27.125rem",
          height: "6.125rem",
          flexShrink: 0,
          fontSize: "1.625rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "112%" /* 1.82rem */
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1530,
      xxxl: 1710
    }
  },
  sizes: {
    header: 15,
    sidebar: 30
  }
});
