import "../assets/css/_default.css";
import { Box, Divider, useTheme } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import Header from "../components/header/Header.jsx";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import ReasoningSection from "../components/reasoningSection/ReasoningSection.jsx";
import ButtonArea from "../components/buttonArea/ButtonArea.jsx";
import ExperimentsSection from "../components/experimentsSection/ExperimentsSection.jsx";
import binaryStripe from "../assets/img/binary-stripe.png";
import CoefficientsSection from "../components/coefficientsSection/CoefficientsSection.jsx";
import FieldsMedalsSection from "../components/fieldsMedalsSection/FieldsMedalsSection.jsx";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection.jsx";

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
      {/* Binary Stripe */}
      <Box
        id="binary-stripe-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
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
      <CoefficientsSection />
      {/* Fields Medals Section */}
      <FieldsMedalsSection />
      {/* Button Area 2 */}
      <ButtonArea />

      {/* Hero-2 */}
      <HeroTwoSection />
      

      {/* Footer     */}
      <Box
        id="footer-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          position: "relative",
          background: "plum",
          width: "100vw",
          height: "40vh",
          marginBottom: "0"
        }}
      >
  <Box
        id="footer-items-container"
        sx={{
          display: "flex",          
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          background: "lightblue",
          width: "90vw",
          height: "100%",
          margin: "0 5vw 0 5vw"
        
        }}
      >    
        <div id="left-items">
          <div>logo</div>
          <div>rights</div>
          <div>solved by</div>
        </div>
        <div id="right-items">
          <div id="nav-1">
            <a href="">The Science</a>
            <a href="">Millenniums</a>
            <a href="">Coefficients</a>
          </div>
          <div id="nav-2">
            <a href="">The Science</a>
            <a href="">Millenniums</a>
            <a href="">Coefficients</a>
          </div>          
        </div>

      </Box>

      </Box>

    </Box>
  );
}
