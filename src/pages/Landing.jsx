import { useEffect, useRef, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { gsap } from "gsap";
import mainBackground from "../assets/img/vector-103-stroke.png";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import ReasoningSection from "../components/reasoningSection/ReasoningSection.jsx";
import ButtonArea from "../components/buttonArea/ButtonArea.jsx";
import ExperimentsSection from "../components/experimentsSection/ExperimentsSection.jsx";
import binaryStripe from "../assets/img/binary-stripe.png";
import CoefficientsSection from "../components/coefficientsSection/CoefficientsSection.jsx";
import FieldsMedalsSection from "../components/fieldsMedalsSection/FieldsMedalsSection.jsx";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection.jsx";

const Landing = () => {
  const theme = useTheme();

  const boxRef = useRef(null);

  useEffect(() => {
      const boxElement = boxRef.current;

      gsap.fromTo(boxElement, {
          opacity: 0,
          scale: 0.9
      }, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out"
      });
      
      return () => {
          gsap.to(boxElement, {
              opacity: 0,
              scale: 0.9,
              duration: 1.5,
              ease: "power2.in"
          });
      };
  }, []); 

  return (
    <Box
      id="main-body"
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Hero Section */}
      <Box
        ref={boxRef}
        id="hero-container"
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundImage: `url(${mainBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "70vh",
            maxHeight: "100vh",
            marginBottom: "2rem", 
            opacity: 0
        }}
      >
        <HeroSection />
      </Box>

      {/* Reasoning Section */}
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <ReasoningSection />
      </Box>

      {/* Button Area */}
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <ButtonArea />
      </Box>

      {/* Experiment Section */}
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <ExperimentsSection />
      </Box>

      {/* Binary Stripe */}
      <Box
        id="binary-stripe-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${binaryStripe})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: {
            xxxs: "7vh",
            xxs: "8vh",
            xs: "9vh",
            sm: "13vh",
            md: "17vh",
            lg: "20vh",
          },
          marginBottom: {
            xxxs: 4,
            xxs: 4,
            xs: 4,
            sm: 4,
            md: 4,
            lg: "15vh",
          },
        }}
      />

      {/* Coefficients Section */}
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <CoefficientsSection />
      </Box>

      {/* Fields Medals Section */}
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <FieldsMedalsSection />
      </Box>

      {/* Button Area 2 */}
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <ButtonArea />
      </Box>

      {/* Hero-2 */}
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <HeroTwoSection />
      </Box>
    </Box>
  );
};

export default Landing;
