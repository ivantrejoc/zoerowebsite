import { Box, Typography, Grid, Avatar } from "@mui/material";
import ButtonArea from "../components/buttonArea/ButtonArea";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection";
import xicon from "../assets/icons/x-icon.svg";
import imageSeafenaMain from "../assets/img/imageSeafenaMain.png";
import seafenaBanner from "../assets/img/seafenaBanner.png";
import seafenaGrid1 from "../assets/img/seafenaGrid1.png";
import seafenaGrid2 from "../assets/img/seafenaGrid2.png";
import seafenaGrid3 from "../assets/img/seafenaGrid3.png";
import seafenaGrid4 from "../assets/img/seafenaGrid4.png";
import seaferaImage from "../assets/img/seaferaImage.png";
import salahAvatar from "../assets/img/salah-moutaouakil.png";
import binaryStripe from "../assets/img/binary-stripe.png";
import { useTheme } from "@mui/material/styles";

const Seafena = () => {
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
              SEAFENA
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
              A Voyage of Branding and Experience The Essence of Nautical
              Excellence
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
            backgroundImage: `url(${imageSeafenaMain})`,
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
                SEAFENA EQUATIONS
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
                “Seafena is an invitation to the extraordinary, a passage
                through luxury and tranquility crafted within each sea voyage.
                Here, each moment unfolds into a story rich with meticulous
                detail, from the polished decks of our state-of-the-art vessels
                to the personalized care in our service.”
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* SEAFENA IMAGE */}
      <Box
        id="seafena-image-container"
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
          backgroundImage: `url(${seafenaBanner})`,
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
                backgroundImage: `url(${seafenaGrid1})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${seafenaGrid2})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${seafenaGrid3})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${seafenaGrid4})`,
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
            backgroundImage: `url(${seaferaImage})`,
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
                src={salahAvatar}
                variant="rounded"
                sx={{
                  width: "4.375rem",
                  height: "4.375rem",
                  flexShrink: "0",
                }}
              />
            </Box>
            <Box id="client-name-container">
              <p id="name">SALAH MOUTAOUAKIL</p>
              <Typography
                variant="workPosition"
                component="p"
                sx={{ margin: 0 }}
              >
                CEO & Founder
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
            &quot;As CEO, I see our path much like navigating the vast ocean,
            constantly adjusting to the winds of market trends and technological
            shifts. Our collaboration with Zoero has been pivotal in developing
            our innovative digital product, blending their tech prowess with our
            industry insights to forge ahead into new waters of opportunity and
            growth.&quot;
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

export default Seafena;
