import { Box, useTheme, Typography } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import Header from "../components/Header.jsx";

export default function Landing() {
  const theme = useTheme();

  return (
    <Box
      id="main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover"
      }}
    >
      <Box
        id="header-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${mainBackground})`,
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh"
        }}
      >
        <Header />
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
            maxHeight: "120vh"
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              width: "100%",
              marginTop: "2vh",
              whiteSpace: "pre-line"
            }}
          >
            &nbsp;WE SOLVE THE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♦&nbsp;MILLENNIUM
            &nbsp;&nbsp;&nbsp;&nbsp;EQUATIONS
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
