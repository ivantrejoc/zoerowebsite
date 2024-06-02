import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
        position: "relative",
        width: "90vw",
        height: "65vh",
        margin: "0 5vw 0 5vw",
        maxHeight: "120vh",
        [theme.breakpoints.down("xxl")]: {
          height: "80vh",
          justifyContent: "center"
        }
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          width: "100%",
          marginTop: "2vh",
          whiteSpace: "pre-line",
          [theme.breakpoints.down("xxxl")]: {
            fontSize: "10.275rem"
          },

          [theme.breakpoints.down("xxl")]: {
            fontSize: "9rem"
          },
          [theme.breakpoints.down("xl")]: {
            fontSize: "8.5rem"
          },
          [theme.breakpoints.down("lg")]: {
            fontSize: "5.3375rem"
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "5.4375rem"
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "3.3375rem"
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "2.6375rem"
          },
          [theme.breakpoints.down("xxs")]: {
            fontSize: "2.2375rem"
          }
        }}
      >
        &nbsp;WE SOLVE THE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♦&nbsp;MILLENNIUM
        &nbsp;&nbsp;&nbsp;&nbsp;EQUATIONS
      </Typography>
    </Box>
  );
};
export default HeroSection;
