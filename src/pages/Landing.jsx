import "../assets/css/_default.css";
import { Box, useTheme } from "@mui/material";
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

  return (
    <Box
      id="main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover"
      }}
    >
      {/* Main area */}
      <Box
        id="hero-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${mainBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          width: "100vw",
          height: "80vh",
          maxHeight: "100vh",
          [theme.breakpoints.down("xxl")]: {
            height: "90vh",
            backgroundPosition: "center",
            
            
          },
          [theme.breakpoints.down("xl")]: {
            fontSize: "7rem"
          },
          [theme.breakpoints.down("md")]: {
            height: "70vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            marginBottom: 6
          },
          [theme.breakpoints.down("sm")]: {
            height: "50vh",
            backgroundPosition: "center"
          },
          [theme.breakpoints.down("xs")]: {
            height: "30vh",
            backgroundPosition: "center"
          }
        }}
      >
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
    </Box>
  );
};

export default Landing;
