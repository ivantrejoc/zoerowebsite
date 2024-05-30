import { Box, Typography, Grid, Avatar } from "@mui/material";
import ButtonArea from "../components/buttonArea/ButtonArea";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection";
import xicon from "../assets/icons/x-icon.svg";
import fullWidthDomain from "../assets/img/fullWidthDomain.png";
import imageDomainMain from "../assets/img/imageDomainMain.png";
import domainGrid1 from "../assets/img/domainGrid1.png";
import domainGrid2 from "../assets/img/domainGrid2.png";
import domainGrid3 from "../assets/img/domainGrid3.png";
import domainGrid4 from "../assets/img/domainGrid4.png";
import domainBrands from "../assets/img/domainBrands.png";
import omarAvatar from "../assets/img/omarAvatar.png";
import binaryStripe from "../assets/img/binary-stripe.png";
import { useTheme } from "@mui/material/styles";

const DomainExpansion = () => {
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
        backgroundSize: "cover",
      }}
    >
      {/* MAIN HERO */}
      <Box
        id="hero-two-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "43vh",
          maxHeight: "43vh",
          marginBottom: 12,
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
            maxHeight: "100%",
          }}
        >
          <Box
            sx={{
              width: "15%",
              height: "9vh",
              display: "flex",
              gap: 1,
              marginBottom: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Urbanist",
                fontSize: "5rem",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "100%",
              }}
              component="h2"
            >
              OPERATIONS
            </Typography>
            <Typography
              variant="text"
              component="p"
              sx={{
                width: "10%",
                paddingTop: 2,
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
              marginBottom: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "112%",
              }}
              component="p"
            >
              Deep Calculus Dive into some of our most recent brand identity and
              strategy projects.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "5vh",
              display: "flex",
              gap: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <img id="x-icon" src={xicon} alt="x-icon" />{" "}
              <Typography
                variant="text"
                sx={{
                  justifyItems: "center",
                  alignContent: "center",
                }}
                component="p"
              >
                Brand Design
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <img id="x-icon" src={xicon} alt="x-icon" />{" "}
              <Typography
                variant="text"
                sx={{
                  justifyItems: "center",
                  alignContent: "center",
                }}
                component="p"
              >
                Web Crafting
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
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
          marginBottom: 12,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            backgroundImage: `url(${imageDomainMain})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            maxHeight: "100%",
            marginBottom: 12,
          }}
        />
      </Box>
      {/* DOMAIN APP SECTION */}
      <Box
        id="domain-app-container"
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
          marginBottom: 12,
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
          }}
        >
          <Grid container columnGap={2} sx={{ height: "100%" }}>
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Urbanist",
                  fontSize: "4.575rem",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "100%",
                }}
              >
                BRANDING EQUATIONS
              </Typography>
            </Grid>
            <Grid
              item
              xs={6.87}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="text"
                align="start"
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontSize: "2rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: 0,
                }}
              >
                “Pony really understood what we were trying achieve and was very
                flexible and responsive. They challenged our thinking and took
                some smart risk in the design which turned out to be great. I
                would highly recommend them and it&apos;s great that we cann say
                they added value.”
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* DOMAIN IMAGE */}
      <Box
        id="domain-image-container"
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
          backgroundImage: `url(${fullWidthDomain})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginBottom: 12,
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
          marginBottom: 12,
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
          }}
        >
          <Grid container gap={5} sx={{ height: "100%" }}>
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${domainGrid1})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${domainGrid2})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${domainGrid3})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${domainGrid4})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Box>
      </Box>

      {/* BRANDS SECTION */}
      <Box
        id="brands-container"
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
          marginBottom: 12,
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
            backgroundImage: `url(${domainBrands})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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
          marginBottom: 12,
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
            margin: "0 20vw 0 20vw",
          }}
        >
          <Box
            id="client-avatar-container"
            sx={{ display: "flex", gap: 2, marginBottom: 2 }}
          >
            <Box id="client-photo-container">
              <Avatar
                alt="bachir-rzama"
                src={omarAvatar}
                variant="rounded"
                sx={{
                  width: "4.375rem",
                  height: "4.375rem",
                  flexShrink: "0",
                }}
              />
            </Box>
            <Box id="client-name-container">
              <p id="name">OMAR ZOUHAIR</p>
              <Typography
                variant="workPosition"
                component="p"
                sx={{ margin: 0 }}
              >
                Zoero Mathematician
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="text"
            component="p"
            sx={{
              color: "#fff",
              fontFamily: "Urbanist",
              fontSize: "2.61244rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
            }}
          >
            “I&apos;m proud to showcase a series of recent branding projects
            that we passionately brought to life. Each project was approached
            with a deep understanding of our clients&apos; unique objectives.
            From crafting compelling visual identities to designing cohesive
            brand systems, we ensured that every element resonated authentically
            with our clients&apos; target audiences.”
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
          width: "auto",
          height: "20vh",
          marginBottom: "15vh",
        }}
      />
      {/* HERO TWO */}
      <HeroTwoSection />
    </Box>
  );
};

export default DomainExpansion;