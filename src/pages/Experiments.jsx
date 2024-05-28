import { Box, Typography, Grid, Avatar } from "@mui/material";
import { useTheme } from "@emotion/react";
import ButtonArea from "../components/buttonArea/ButtonArea";
import xicon from "../assets/icons/x-icon.svg";
import cellphonesImage from "../assets/img/frame-300.png";
import exeBanner from "../assets/img/exe-banner.png";
import exeGrid1 from "../assets/img/exe-grid1.png";
import exeGrid2 from "../assets/img/exe-grid-2.png";
import exeGrid3 from "../assets/img/exe-grid-3.png";
import exeGrid4 from "../assets/img/exe-grid-4.png";
import exeScreenshots from "../assets/img/exe-screenshots.png";
import bachirAvatar from "../assets/img/bachir-avatar.png";
import binaryStripe from "../assets/img/binary-stripe.png";

const Experiments = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact-main-body"
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
      {/* MAIN HERO */}
      <Box
        id="hero-experiment-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "30vh",
          maxHeight: "30vh",
          marginBottom: 12
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            maxHeight: "100%"
          }}
        >
          <Box
            sx={{
              width: "15%",
              height: "9vh",
              display: "flex",
              gap: 1,
              marginBottom: 2
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Urbanist",
                fontSize: "5rem",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "100%"
              }}
              component="h2"
            >
              EXE
            </Typography>
            <Typography
              variant="text"
              component="p"
              sx={{
                width: "10%",
                paddingTop: 2
              }}
            >
              Case Study
            </Typography>
          </Box>
          <Box
            sx={{
              width: "60%",
              height: "12vh",
              display: "flex",
              flexDirection: "column",
              marginBottom: 2
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "112%"
              }}
              component="p"
            >
              An innovative workout tracker app designed to optimize your
              exercise regimen and accuracy.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "5vh",
              display: "flex",
              gap: 6
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2
              }}
            >
              <img id="x-icon" src={xicon} alt="x-icon" />{" "}
              <Typography
                variant="text"
                sx={{
                  justifyItems: "center",
                  alignContent: "center"
                }}
                component="p"
              >
                Brand Design
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2
              }}
            >
              <img id="x-icon" src={xicon} alt="x-icon" />{" "}
              <Typography
                variant="text"
                sx={{
                  justifyItems: "center",
                  alignContent: "center"
                }}
                component="p"
              >
                Web Crafting
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* MAIN IMAGE */}
      <Box
        id="main-image-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "110vh",
          maxHeight: "110vh",
          marginBottom: 12
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            backgroundImage: `url(${cellphonesImage})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            maxHeight: "100%",
            marginBottom: 12
          }}
        />
      </Box>
      {/* EXE APP SECTION */}
      <Box
        id="exe-app-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "50vh",
          maxHeight: "50vh",
          marginBottom: 12
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "stretch",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw"
          }}
        >
          <Grid container columnGap={2} sx={{ height: "100%" }}>
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center"
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Urbanist",
                  fontSize: "4.575rem",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "100%"
                }}
              >
                EXE APP EQUATIONS
              </Typography>
            </Grid>
            <Grid
              item
              xs={6.87}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center"
              }}
            >
              <Typography
                variant="text"
                align="start"
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontSize: "2.51244rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: 0
                }}
              >
                EXE is an innovative workout tracker app that combines great
                design with precise analytics to deliver an efficient fitness
                experience. Our goal was to create a tool that not only tracks
                workouts but also provides actionable insights that help users
                optimize their fitness journey.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* EXE IMAGE */}
      <Box
        id="exe-image-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "64.5vh",
          maxHeight: "64.5vh",
          backgroundImage: `url(${exeBanner})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginBottom: 12
        }}
      />
      {/* GRID IMAGES */}
      <Box
        id="grid-image-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "130vh",
          maxHeight: "130vh",
          marginBottom: 12
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "stretch",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw"
          }}
        >
          <Grid container gap={5} sx={{ height: "100%" }}>
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${exeGrid1})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${exeGrid2})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${exeGrid3})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${exeGrid4})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
          </Grid>
        </Box>
      </Box>
      {/* SCREENSHOTS SECTION */}
      <Box
        id="screenshots-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "135vh",
          maxHeight: "135vh",
          marginBottom: 12
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "stretch",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            backgroundImage: `url(${exeScreenshots})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        />
      </Box>
      {/* TESTIMONY SECTION */}
      <Box
        id="testimony-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "100vh",
          maxHeight: "100vh",
          marginBottom: 12
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "stretch",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "60%",
            height: "65%",
            margin: "0 20vw 0 20vw"
          }}
        >
          <Box
            id="client-avatar-container"
            sx={{ display: "flex", gap: 2, marginBottom: 2 }}
          >
            <Box id="client-photo-container">
              <Avatar
                alt="bachir-rzama"
                src={bachirAvatar}
                variant="rounded"
                sx={{
                  width: "4.375rem",
                  height: "4.375rem",
                  flexShrink: "0"
                }}
              />
            </Box>
            <Box id="client-name-container">
              <p id="name">Bachir RZAMA</p>
              <Typography
                variant="workPosition"
                component="p"
                sx={{ margin: 0 }}
              >
                Happy Client
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="text"
            component="p"
            sx={{
              color: "#FF0303",
              fontFamily: "Urbanist",
              fontSize: "2.61244rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%"
            }}
          >
            “I'm proud to showcase a series of recent branding projects that we
            passionately brought to life. Each project was approached with a
            deep understanding of our clients' unique objectives. From crafting
            compelling visual identities to designing cohesive brand systems, we
            ensured that every element resonated authentically with our clients'
            target audiences.”
          </Typography>
        </Box>
      </Box>
      <ButtonArea />
      {/* BINARY STRIPE */}
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
    </Box>
  );
};
export default Experiments;
