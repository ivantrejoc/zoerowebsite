import { useState, useEffect, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import { gsap } from "gsap";
import { useMediaQuery } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import ReasoningSection from "../components/reasoningSection/ReasoningSection.jsx";
import ButtonArea from "../components/buttonArea/ButtonArea.jsx";
import ExperimentsSection from "../components/experimentsSection/ExperimentsSection.jsx";
import BinaryBanner from "../components/binaryBanner/binaryBanner.jsx";
import CoefficientsSection from "../components/coefficientsSection/CoefficientsSection.jsx";
import FieldsMedalsSection from "../components/fieldsMedalsSection/FieldsMedalsSection.jsx";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection.jsx";

const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMobile);

  const boxRef = useRef(null);
  const heroRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [shouldAnimateImage, setShouldAnimateImage] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    const boxElement = boxRef.current;
    const heroElement = heroRef.current;

    const imageAnimationTimeout = setTimeout(() => {
      setShouldAnimateImage(true);
    }, 2000);

    if (isImageLoaded && shouldAnimateImage) {
      gsap.fromTo(
        boxElement,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.fromTo(
              heroElement,
              {
                opacity: 0,
                scale: 0.9,
              },
              {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power2.out",
              }
            );
          },
        }
      );
    }

    return () => {
      clearTimeout(imageAnimationTimeout);
    };
  }, [isImageLoaded, shouldAnimateImage]);

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
          opacity: isImageLoaded ? 0 : 1,
        }}
      >
         {!isImageLoaded && isMobile && (
          <img
            src={mainBackground}
            alt="Main Background"
            style={{ display: 'none' }}
            onLoad={handleImageLoad}
          />
        )}
        <div ref={heroRef} style={{ opacity: 0 }}>
          <HeroSection />
        </div>
      </Box>

      {/* Reasoning Section */}
      <Box sx={{ width: "100%", marginBottom: 0 }}>
        <ReasoningSection />
      </Box>

      {/* Button Area */}
      <Box sx={{ width: "100%", marginBottom:  isMobile ? 0 : 10 }}>
        <ButtonArea />
      </Box>

      {/* Experiment Section */}
      <Box sx={{ width: "100%", marginBottom: isMobile ? 0 : 15 }}>
        <ExperimentsSection />
      </Box>

      {/* Binary Stripe */}
      <Box sx={{ width: "100%", marginBottom: 0 }}>
        <BinaryBanner />
      </Box>

      {/* Coefficients Section */}
      <Box sx={{ width: "100%", marginBottom: 0 }}>
        <CoefficientsSection />
      </Box>

      {/* Fields Medals Section */}
      <Box sx={{ width: "100%", marginBottom: 0 }}>
        <FieldsMedalsSection />
      </Box>

      {/* Button Area 2 */}
      <Box sx={{ width: "100%", marginBottom: 0 }}>
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
