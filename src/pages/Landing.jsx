import "../assets/css/_default.css";
import { Box, useTheme } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import Header from "../components/header/Header.jsx";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import { Typography } from "@mui/material";
import ellipse from "../assets/img/ellipse-reasoning.svg";

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
        <HeroSection />
      </Box>
      <Box
        id="reasoning-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          marginTop: "1vh"
        }}
      >
        <Box
          id="title-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            position: "relative",
            width: "100vw",
            height: "10vh",
            padding: "10vh 0 10vh 0",
            maxHeight: "100vh"
          }}
        >
          <Typography variant="h2" component="h2" sx={{ marginLeft: "8vw" }}>
            THE REASONING
          </Typography>
        </Box>

        <Box
          id="content-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            position: "relative",
            width: "100vw",
            height: "90vh",
            padding: "0 25vw 0 25vw",
            gap: "3vw",
            maxHeight: "100vh"
          }}
        >
          <div id="reasoning-image">
            <img src={ellipse} alt="ellipse" />
          </div>
          <div id="reasoning-text">
            <Typography
              sx={{
                color: "#8A8A8A",
                fontFamily: "Urbanist",
                fontSize: "0.875rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "112%",
                letterSpacing: "0.14875rem"
              }}
            >
              SCROLL DOWN
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{ marginBottom: "0.25rem" }}
            >
              General Premise
            </Typography>
            <Typography
              variant="text"
              sx={{ whiteSpace: "pre-line" }}
              component="p"
            >
              {" "}
              If your company prioritizes
            </Typography>
            <Typography
              variant="text"
              sx={{ whiteSpace: "pre-line" }}
              component="p"
            >
              - Innovation and Adaptability
            </Typography>
            <Typography
              variant="text"
              sx={{ whiteSpace: "pre-line" }}
              component="p"
            >
              - Quality and Excellence
            </Typography>
            <Typography
              variant="text"
              sx={{ whiteSpace: "pre-line" }}
              component="p"
            >
              - Integrity and Transparency
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
