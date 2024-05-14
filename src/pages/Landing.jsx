import "../assets/css/_default.css";
import { Box, useTheme } from "@mui/material";
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

import zoeroLogo from "../assets/img/zoero-logo.svg";

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
      
{/* FALTA INSERTAR DIVIDER QUE NO LO ESTÁ RENDERIZANDO */}
      {/* Footer     */}
      <Box
        id="footer-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          position: "relative",         
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
          width: "84vw",
          height: "100%",
          margin: "0 8vw 0 8vw"
        
        }}
      >    
        <div id="left-items">
          <div id="logo-container">
            <img id="logo-footer" src={zoeroLogo} alt="zoero-logo" />
          </div>
          <p className="rights">© Zoero Labs LTD. <br></br>
          All Rights Reserved 2024.
</p>
          <p id="solvedText">Solved by <span className="highlight">@Omar</span> and <span className="highlight">@Zakaria</span></p>
        </div>
        <div id="right-items">
          <div id="nav-1">
            <a className="footerLinks" href="#">The Science</a>
            <a className="footerLinks" href="#">Millenniums</a>
            <a className="footerLinks" href="#">Coefficients</a>
          </div>
          <div id="nav-2">
            <a className="footerLinks" href="#">Knowledge</a>
            <a className="footerLinks"href="#">Terms & Policies</a>
            <a className="footerLinks" href="#">Contact us</a>
          </div>          
        </div>

      </Box>

      </Box>

    </Box>
  );
}
