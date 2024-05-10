import "../assets/css/_default.css";
import { Box, useTheme } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import Header from "../components/header/Header.jsx";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import ReasoningSection from "../components/reasoningSection/ReasoningSection.jsx";
import ButtonArea from "../components/buttonArea/ButtonArea.jsx";
import { Typography } from "@mui/material";
import diamond from "../assets/icons/diamond.svg";
import brands from "../assets/img/brands1.jpg";
import brandsTwo from "../assets/img/brands2.png";
import brandsThree from "../assets/img/brands3.png";

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
      {/* Main area */}
      <Box
        id="header-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${mainBackground})`,
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh"
        }}
      >
        <Header />
        <HeroSection />
      </Box>
      <ReasoningSection />
      {/* Button Area */}
      <ButtonArea />

      {/* The experiments       */}
      <Box
        id="experiment-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100vw",
          height: "140vh"
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
            gap: "55vw",
            maxHeight: "100vh"
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              marginLeft: "8vw"
            }}
          >
            THE EXPERIMENTS
          </Typography>

          <img src={diamond} alt="diamond" />
        </Box>
        <Box
          id="experiments-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            position: "relative",
            width: "84vw",
            height: "113vh"
          }}
        >
          <div id="experiments-image-container">
            <div id="left-images">
              <img src={brands} alt="brands-1" style={{ width: "100%" }} />
            </div>
            <div id="right-images">
              <div id="up-right-images">
                <img
                  src={brandsTwo}
                  alt="brands-1"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div id="down-right-images">
                <img
                  src={brandsThree}
                  alt="brands-three"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
