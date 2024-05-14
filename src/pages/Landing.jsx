import "../assets/css/_default.css";
import { Box, useTheme, Avatar, Typography } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";
import Header from "../components/header/Header.jsx";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import ReasoningSection from "../components/reasoningSection/ReasoningSection.jsx";
import ButtonArea from "../components/buttonArea/ButtonArea.jsx";
import ExperimentsSection from "../components/experimentsSection/ExperimentsSection.jsx";
import binaryStripe from "../assets/img/binary-stripe.png";
import CoefficientsSection from "../components/coefficientsSection/CoefficientsSection.jsx";
import FieldsMedalsSection from "../components/fieldsMedalsSection/FieldsMedalsSection.jsx";
import zakariaAvatar from "../assets/img/zakaria-avatar.png";

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
      <Box
        id="hero-2"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          position: "relative",
          width: "100vw",
          height: "50vh",
          maxHeight: "50vh",
          paddingLeft: "8.25vw",
          marginBottom: "15vh"
        }}
      >
        <Box
          id="hero-contanier"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            position: "relative",
            gap: 2.19,
            width: "70.25rem",
            height: "100%"
          }}
        >
          {" "}
          <div id="text-container">
            <div>
              <p id="hero-2-text">
                {
                  '"In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."'
                }
              </p>
            </div>
          </div>
          <div id="avatar-container">
            <div id="photo-container">
              <Avatar
                alt="zakaria-ambari"
                src={zakariaAvatar}
                variant="rounded"
                sx={{
                  width: "4.375rem",
                  height: "4.375rem",
                  flexShrink: "0"
                }}
              />
            </div>
            <div>
              <p id="name">Zakaria Ambari</p>
              <Typography
                variant="workPosition"
                component="p"
                sx={{ margin: 0 }}
              >
                Zœro Mathematician{" "}
              </Typography>
            </div>
          </div>
        </Box>
        {/* <Divider variant="fullWidth" orientation="horizontal"
        absolute sx={{
          display: "flex",
          color: "red",
         width: 3,
          height: "2rem",
          flexShrink: 0,
          marginTop: "10rem"
        }} /> */}
      </Box>
    </Box>
  );
}
