import "../assets/css/_default.css";
import { Box, useTheme } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import Header from "../components/header/Header.jsx";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import ReasoningSection from "../components/reasoningSection/ReasoningSection.jsx";
import ButtonArea from "../components/buttonArea/ButtonArea.jsx";
import { Typography } from "@mui/material";
import diamond from "../assets/icons/diamond.svg";


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
          background: "plum",
          width: "100vw",
          height: "160vh",
                }}
      >
        <Box
        id="title-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          background: "lightblue",
          alignItems: "center",
          position: "relative",
          width: "100vw",
          height: "10vh",
          padding: "10vh 0 10vh 0",
          gap: "55vw",
          maxHeight: "100vh"
        }}
      >
        <Typography variant="h2" component="h2" sx={{
           marginLeft: "8vw" }}>
          THE EXPERIMENTS
        </Typography>

        <img src={diamond} alt="diamond" />
      </Box>
      <Box
        id="experiments-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          background: "orange",
          alignItems: "center",
          position: "relative",
          width: "84vw",
          height: "160vh",
          padding: "10vh 0 10vh 0",
          gap: "55vw"          
        }}
      ></Box>
      </Box>
    </Box>
  );
}
