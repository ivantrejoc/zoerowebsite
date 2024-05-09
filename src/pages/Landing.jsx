import { Box, useTheme, Typography } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import zoeroLogo from "../assets/img/zoero-logo.svg";

export default function Landing() {
  const theme = useTheme();
  console.log("LOS DETALLES DEL TEMA: ", theme);
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
        <header id="header">
          <Box
            id="logo-container"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "20vw",
              height: "100%",
              maxHeight: "100%"
            }}
          >
            <img id="logo" src={zoeroLogo} alt="zoero-logo" />
          </Box>

          <Box
            id="logo-container"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "end",
              position: "relative",
              width: "15vw",
              height: "100%",
              maxHeight: "100%",
              paddingRight: "5vw"
            }}
          >
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.25
              }}
              component="a"
              href="#"
            >
              REASONING
            </Typography>
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.25
              }}
              component="a"
              href="#"
            >
              EXPERIMENTS
            </Typography>
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.25
              }}
              component="a"
              href="#"
            >
              COEFFICIENTS
            </Typography>
            <Typography variant="navLinks" component="a" href="#">
              LET’S SOLVE
            </Typography>
          </Box>
        </header>
      </Box>
    </Box>
  );
}
