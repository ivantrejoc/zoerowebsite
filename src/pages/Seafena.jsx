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
        overflowX: "hidden",
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
            height: "32vh",
            maxHeight: "32vh"
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
              width: "23%",
              height: "9vh",
              display: "flex",
              gap: 1,
              marginBottom: 2,
              [theme.breakpoints.down("xxl")]: {
                width: "31%",
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
              SEAFENA
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
      <Box
        id="main-image-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "hidden",
          height: "120vh",
          maxHeight: "120vh",
          marginBottom: 12,
          [theme.breakpoints.down("md")]: {
            height: "110vh",
            maxHeight: "110vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "83vh",
            maxHeight: "83vh"
          },
          [theme.breakpoints.down("xs")]: {
            height: "55vh",
            maxHeight: "55vh"
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
            backgroundImage: `url(${imageSeafenaMain})`,
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
        id="seafena-app-container"
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
          [theme.breakpoints.down("xxl")]: {
            height: "69vh",
            maxHeight: "69vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "131vh",
            maxHeight: "131vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "70vh",
            maxHeight: "70vh",
            marginBottom: 6
          },
          [theme.breakpoints.down("xs")]: {
            height: "49vh",
            maxHeight: "49vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xxs")]: {
            height: "56vh",
            maxHeight: "56vh"
          }
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
              xxl={5}
              xl={4.6}
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
                  lineHeight: "100%",
                  [theme.breakpoints.down("xxl")]: {
                    fontSize: "4.275rem"
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "3.375rem"
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "2.1375rem"
                  }
                }}
              >
                SEAFENA EQUATIONS
              </Typography>
            </Grid>
            <Grid
              item
              xxl={6.87}
              xl={7.2}
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
                  fontSize: "2rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: 0,
                  [theme.breakpoints.down("xxl")]: {
                    fontSize: "2.31244rem"
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.25rem"
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "0.9375rem"
                  }
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
                backgroundImage: `url(${seafenaGrid1})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${seafenaGrid2})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${seafenaGrid3})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xs={5.838}
              sx={{
                backgroundImage: `url(${seafenaGrid4})`,
                backgroundSize: "100%",
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
            backgroundImage: `url(${seaferaImage})`,
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
                src={salahAvatar}
                variant="rounded"
                sx={{
                  width: "4.375rem",
                  height: "4.375rem",
                  flexShrink: "0"
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
              lineHeight: "150%"
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
          marginBottom: "15vh"
        }}
      />
      {/* HERO TWO */}
      <HeroTwoSection />
    </Box>
  );
};

export default Seafena;
