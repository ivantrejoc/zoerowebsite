import { Box, Typography, Grid, Avatar } from "@mui/material";
import ButtonArea from "../components/buttonArea/ButtonArea";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection";
import xicon from "../assets/icons/x-icon.svg";
import fullWidthTeuser from "../assets/img/fullWidthTeuser.png";
import imageTeuserMain from "../assets/img/imageTeuserMain.png";
import teuserGrid2 from "../assets/img/teuserGrid2.png";
import teuserGrid3 from "../assets/img/teuserGrid3.png";
import teuserGrid4 from "../assets/img/teuserGrid4.png";
import teuserBrands from "../assets/img/teuserBrands.png";
import omarAvatar from "../assets/img/omarAvatar.png";
import binaryStripe from "../assets/img/binary-stripe.png";
import { useTheme } from "@mui/material/styles";

const Teuser = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact-main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover"
      }}
    >
      {/* MAIN HERO */}
      <Box
        id="main-hero-container"
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
          marginBottom: 12,
          [theme.breakpoints.down("xxl")]: {
            height: "36vh",
            maxHeight: "36vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "40vh",
            maxHeight: "40vh",
            marginBottom: 6
          },
          [theme.breakpoints.down("sm")]: {
            height: "35vh",
            maxHeight: "35vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xs")]: {
            height: "33vh",
            maxHeight: "33vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "36vh",
            maxHeight: "36vh"
          }
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
              marginBottom: 2,
              [theme.breakpoints.down("xxl")]: {
                width: "33%",
                height: "11vh",
                gap: 2
              },
              [theme.breakpoints.down("md")]: {
                width: "100%",
                gap: 1
              },
              [theme.breakpoints.down("sm")]: {
                width: "75%",
                height: "9vh",
                gap: 1
              },
              [theme.breakpoints.down("xs")]: {
                width: "70%"
              }
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
                [theme.breakpoints.down("md")]: {
                  width: "30%",
                  fontSize: "2.825rem"
                },
                [theme.breakpoints.down("sm")]: {
                  width: "47%",
                  fontSize: "2.4375rem"
                },
                [theme.breakpoints.down("xs")]: {
                  width: "78%"
                },
                [theme.breakpoints.down("xxs")]: {
                  fontSize: "2.0675rem"
                }
              }}
              component="h2"
            >
              TEUSER
            </Typography>
            <Typography
              variant="text"
              component="p"
              sx={{
                width: "10%",
                paddingTop: 2,
                [theme.breakpoints.down("xxl")]: {
                  width: "10%"
                },
                [theme.breakpoints.down("md")]: {
                  width: "6%",
                  fontSize: "0.9375rem",
                  paddingTop: 1
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.7375rem"
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.7375rem"
                }
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
              [theme.breakpoints.down("xxl")]: {
                width: "70%",
                height: "14vh"
              },
              [theme.breakpoints.down("md")]: {
                width: "82%"
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                height: "10vh"
              },
              [theme.breakpoints.down("xxs")]: {
                width: "100%",
                height: "20vh"
              }
            }}
          >
            <Typography
              sx={{
                color: "#FF0000",
                fontFamily: "Urbanist",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "112%",
                [theme.breakpoints.down("md")]: {
                  fontSize: "1.725rem"
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.25rem"
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "1rem"
                }
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
              [theme.breakpoints.down("xxl")]: {
                width: "40%",
                height: "6vh"
              },
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "9vh"
              },
              [theme.breakpoints.down("sm")]: {
                gap: 10
              },
              [theme.breakpoints.down("xs")]: {
                gap: 4
              }
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                [theme.breakpoints.down("xs")]: {
                  width: "47.5%"
                }
              }}
            >
              <img id="x-icon" src={xicon} alt="x-icon" />{" "}
              <Typography
                variant="text"
                sx={{
                  justifyItems: "center",
                  alignContent: "center",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.91556rem"
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "0.85rem"
                  }
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
                [theme.breakpoints.down("xs")]: {
                  width: "47.5%"
                }
              }}
            >
              <img id="x-icon" src={xicon} alt="x-icon" />{" "}
              <Typography
                variant="text"
                sx={{
                  justifyItems: "center",
                  alignContent: "center",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.91556rem"
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "0.85rem"
                  }
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
          height: "137vh",
          maxHeight: "137vh",
          marginBottom: 12,
          [theme.breakpoints.down("xxl")]: {
            height: "127vh",
            maxHeight: "127vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "112vh",
            maxHeight: "112vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "84vh",
            maxHeight: "84vh"
          },
          [theme.breakpoints.down("xs")]: {
            height: "54vh",
            maxHeight: "54vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "46vh",
            maxHeight: "46vh"
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            backgroundImage: `url(${imageTeuserMain})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            maxHeight: "100%"
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
                TEUSER EQUATIONS
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
                  color: "#FF0000",
                  width: "100%",
                  flexShrink: 0,
                  fontSize: "2rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: 0
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
      {/* TEUSER IMAGE */}
      <Box
        id="teuser-image-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "auto",
          overflowX: "0px",
          height: "50vh",
          maxHeight: "50vh",
          backgroundImage: `url(${fullWidthTeuser})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginBottom: 12
        }}
      >
        <Typography
          sx={{
            color: "#E20202",
            fontSize: 40,
            fontFamily: "Urbanist",
            fontWeight: 700
          }}
        >
          SOMETHING COOL ABOUT THE TEUSER PROJECT
        </Typography>
      </Box>
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Typography
                sx={{
                  color: "#FF0000",
                  fontSize: 70,
                  fontWeight: 700,
                  lineHeight: "200px",
                  fontFamily: "Urbanist"
                }}
              >
                WE SOLVE EQUATIONS
              </Typography>
            </Grid>
            <Grid
              item
              xs={5.838}
              sx={{
                background: "#414141",
                backgroundImage: `url(${teuserGrid2})`,
                backgroundSize: "80%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                background: "#414141",
                backgroundImage: `url(${teuserGrid3})`,
                backgroundSize: "80%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                background: "#414141",
                backgroundImage: `url(${teuserGrid4})`,
                backgroundSize: "80%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
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
            backgroundImage: `url(${teuserBrands})`,
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
                src={omarAvatar}
                variant="rounded"
                sx={{
                  width: "4.375rem",
                  height: "4.375rem",
                  flexShrink: "0"
                }}
              />
            </Box>
            <Box id="client-name-container">
              <p id="name">MAROUANE</p>
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
              color: "#FF0000",
              fontFamily: "Urbanist",
              fontSize: "2.61244rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%"
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
          marginBottom: "15vh"
        }}
      />
      {/* HERO TWO */}
      <HeroTwoSection />
    </Box>
  );
};

export default Teuser;
