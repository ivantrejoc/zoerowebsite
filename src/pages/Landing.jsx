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
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          height: "70vh",
          maxHeight: "100vh",
          [theme.breakpoints.down("xxl")]: {
            height: "90vh"
          },
          [theme.breakpoints.down("xl")]: {
            height: "85vh"
          },
          [theme.breakpoints.down("lg")]: {
            height: "30vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "70vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("sm")]: {
            height: "30vh"
          },
          [theme.breakpoints.down("xs")]: {
            height: "30vh"
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
          marginBottom: "15vh",
          [theme.breakpoints.down("md")]:{
            marginBottom: 4,
         height: "17vh"
          },
          [theme.breakpoints.down("sm")]:{
            marginBottom: 4,
         height: "13vh"
          },
          [theme.breakpoints.down("xs")]:{
            marginBottom: 4,
         height: "9vh"
          },
          [theme.breakpoints.down("xxs")]:{
            marginBottom: 4,
         height: "8vh"
          },
          [theme.breakpoints.down("xxxs")]:{
            marginBottom: 4,
         height: "7vh"
          }
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
