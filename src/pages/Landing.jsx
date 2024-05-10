import "../assets/css/_default.css";
import { Box, useTheme, Typography } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import Header from "../components/header/Header.jsx";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import ReasoningSection from "../components/reasoningSection/ReasoningSection.jsx";
import ButtonArea from "../components/buttonArea/ButtonArea.jsx";
import ExperimentsSection from "../components/experimentsSection/ExperimentsSection.jsx";
import binaryStripe from "../assets/img/binary-stripe.png";
import CoefficientsSection from "../components/coefficientsSection/CoefficientsSection.jsx";


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
      {/* Experiment section */}
      <ExperimentsSection />
      {/* Binary Strip */}
      <Box
        id="header-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          background: "lightgreen",
          position: "relative",
          backgroundImage: `url(${binaryStripe})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "20vh",
          marginBottom: "15vh"
        }}
      />
      {/* Coeficients Section */}
      <CoefficientsSection/>
      {/* Fields Medals Section */}
      <Box
        id="fields-medals-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          background: "plum",
          flexDirection: "column",
          position: "relative",
          marginBottom: "15vh",
          width: "100vw",
          height: "100vh"
        }}
      >
        <Box
          id="title-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            position: "relative",
            background: "lightblue",
            width: "100vw",
            height: "5vh",
            padding: "10vh 0 10vh 0"
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              marginLeft: "8vw"
            }}
          >
            FIELDS MEDALS
          </Typography>
        </Box>
        <Box
          id="data-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            background: "gold",
            alignItems: "start",
            position: "relative",
            width: "83vw",
            height: "70vh",
            margin: "0 1vw 0 0"
          }}
        >
          
        </Box>
      </Box>
      
    </Box>
  );
}
