import { Box, Typography } from "@mui/material";
import zoeroLogo from "../assets/img/zoero-logo.svg";
const Header = () => {
  return (
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
  )
}
export default Header