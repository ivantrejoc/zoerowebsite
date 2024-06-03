import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ButtonArea from "../components/buttonArea/ButtonArea";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection";
import xicon from "../assets/icons/x-icon.svg";
import leadsForgeImage from "../assets/img/leads-forge.png";
import leadsForgeBanner from "../assets/img/leads-forge-banner.png";
import binaryStripe from "../assets/img/binary-stripe.png";

const LeadsForge = () => {
  const theme = useTheme();
  return (
    <Box
      id="leads-forge-main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover"
      }}
    >
      {/* MAIN HERO */}
      <Box
        id="hero-leadsForge-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "31vh",
          maxHeight: "31vh",
          marginBottom: 12,
          [theme.breakpoints.down("xxl")]: {
            height: "39vh",
            maxHeight: "39vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "32vh",
            maxHeight: "32vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xs")]: {
            height: "27vh",
            maxHeight: "27vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "26vh",
            maxHeight: "26vh"
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
              width: "45%",
              height: "9vh",
              display: "flex",
              gap: 1,
              marginBottom: 2,
              [theme.breakpoints.down("xxl")]: {
                width: "54%",
                height: "11vh",
                gap: 2
              },
              [theme.breakpoints.down("md")]: {
                width: "100%",
                gap: 2
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                height: "9vh"
              },
              [theme.breakpoints.down("xs")]: {
                width: "100%"
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
                  width: "45%",
                  fontSize: "2.825rem"
                },
                [theme.breakpoints.down("sm")]: {
                  width: "51%",
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
              LEADS FORGE
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
                }
              }}
            >
              Case Study
            </Typography>
          </Box>
          <Box
            sx={{
              width: "45%",
              height: "12vh",
              display: "flex",
              flexDirection: "column",
              marginBottom: 4,
              [theme.breakpoints.down("xxl")]: {
                width: "56%"
              },
              [theme.breakpoints.down("md")]: {
                width: "69%",
                height: "14vh"
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                height: "10vh"
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
              Strategy Crafting and Web Design for a Market Validation Company.
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
          height: "120vh",
          maxHeight: "120vh",
          marginBottom: 12,
          [theme.breakpoints.down("md")]: {
            height: "82vh",
            maxHeight: "82vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xs")]: {
            height: "45vh",
            maxHeight: "45vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "40vh",
            maxHeight: "40vh"
          },
          [theme.breakpoints.down("xxxs")]: {
            height: "34vh",
            maxHeight: "34vh"
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
            backgroundImage: `url(${leadsForgeImage})`,
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
      {/* LEADS FORGE EQUATIONS */}
      <Box
        id="leadsForge-equations-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "90vh",
          maxHeight: "90vh",
          marginBottom: 18,
          [theme.breakpoints.down("xxl")]: {
            height: "120vh",
            maxHeight: "120vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "150vh",
            maxHeight: "150vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xs")]: {
            height: "54vh",
            maxHeight: "54vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "56vh",
            maxHeight: "56vh"
          },
          [theme.breakpoints.down("xxxs")]: {
            height: "63vh",
            maxHeight: "63vh"
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
                alignItems: "start"
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
                LEADS FORGE EQUATIONS
              </Typography>
            </Grid>
            <Grid
              item
              xxl={6.87}
              xl={7.2}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start"
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
                For Leads Forge, we worked on crafting a comprehensive strategy
                and designing a captivating website to elevate their online
                presence. As a market validation company, Leads Forge sought to
                establish credibility and attract their target audience through
                a seamless digital experience. Our design process centered on
                creating a visually striking website that not only reflected
                their innovative approach but also provided intuitive navigation
                for visitors. The result was a dynamic platform that effectively
                communicated their expertise.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* LEADS FORGE BANNER */}
      <Box
        id="leadsForge-equations-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "60vh",
          maxHeight: "60vh",
          marginBottom: 22,
          [theme.breakpoints.down("md")]: {
            height: "41vh",
            maxHeight: "41vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xs")]: {
            height: "22vh",
            maxHeight: "22vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "20vh",
            maxHeight: "20vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "20vh",
            maxHeight: "20vh"
          },
          [theme.breakpoints.down("xxxs")]: {
            height: "17vh",
            maxHeight: "17vh"
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
            backgroundImage: `url(${leadsForgeBanner})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            margin: "0 7vw 0 7vw"
          }}
        />
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
          marginBottom: "15vh",
          [theme.breakpoints.down("md")]: {
            height: "12vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xs")]: {
            height: "7vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "6vh"
          },
          [theme.breakpoints.down("xxxs")]: {
            height: "5vh"
          }
        }}
      />
      <HeroTwoSection />
    </Box>
  );
};
export default LeadsForge;
