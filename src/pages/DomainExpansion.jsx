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
      id="domain-main-body"
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
            height: "41vh",
            maxHeight: "41vh",
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
              width: "33%",
              height: "9vh",
              display: "flex",
              gap: 1,
              marginBottom: 2,
              [theme.breakpoints.down("xxl")]: {
                width: "44%",
                height: "11vh",
                gap: 2
              },
              [theme.breakpoints.down("md")]: {
                width: "100%",
                gap: 1
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                height: "9vh",
                gap: 1
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
                  width: "41%",
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
              OPERATIONS
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
          height: "110vh",
          maxHeight: "110vh",
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
            backgroundImage: `url(${imageDomainMain})`,
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
          marginBottom: 12,
          [theme.breakpoints.down("xxl")]: {
            height: "60vh",
            maxHeight: "60vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "120vh",
            maxHeight: "120vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "59vh",
            maxHeight: "59vh",
            marginBottom: 6
          },
          [theme.breakpoints.down("xs")]: {
            height: "49vh",
            maxHeight: "49vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xxs")]: {
            height: "52vh",
            maxHeight: "52vh"
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
                BRANDING EQUATIONS
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
          [theme.breakpoints.down("sm")]: {
            marginBottom: 6
          }
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
          [theme.breakpoints.down("xxl")]: {
            height: "110vh"
          },

          [theme.breakpoints.down("md")]: {
            height: "341vh",
            maxHeight: "341vh",
            marginBottom: 6
          },
          [theme.breakpoints.down("xs")]: {
            height: "200vh",
            maxHeight: "200vh",
            marginBottom: 6
          },
          [theme.breakpoints.down("xxs")]: {
            height: "250vh"
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
          <Grid
            container
            gap={5}
            sx={{
              height: "100%",
              [theme.breakpoints.down("xxl")]: {
                gap: 3
              },
              [theme.breakpoints.down("xs")]: {
                gap: 1
              }
            }}
          >
            <Grid
              item
              xxs={12}
              lg={5.87}
              xxl={5.838}
              sx={{
                backgroundImage: `url(${domainGrid1})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xxs={12}
              lg={5.87}
              xxl={5.838}
              sx={{
                backgroundImage: `url(${domainGrid2})`,
                backgroundSize: "102%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xxs={12}
              lg={5.87}
              xxl={5.838}
              sx={{
                backgroundImage: `url(${domainGrid3})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            />
            <Grid
              item
              xxs={12}
              lg={5.87}
              xxl={5.838}
              sx={{
                backgroundImage: `url(${domainGrid4})`,
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
          marginBottom: 12,
          [theme.breakpoints.down("xxl")]: {
            height: "128vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "111vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "83vh",
            marginBottom: 6
          },
          [theme.breakpoints.down("xs")]: {
            height: "54vh",
            marginBottom: 6
          },
          [theme.breakpoints.down("xs")]: {
            height: "54vh",
            marginBottom: 6
          },
          [theme.breakpoints.down("xxs")]: {
            height: "46vh",
            marginBottom: 6
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
            margin: "0 7vw 0 7vw",
            backgroundImage: `url(${domainBrands})`,
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
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "hidden",
          height: "64vh",
          maxHeight: "64vh",
          marginBottom: 12,
          [theme.breakpoints.down("xxl")]: {
            height: "62vh",
            maxHeight: "62vh"
          },
          [theme.breakpoints.down("md")]: {
            height: "78vh",
            maxHeight: "78vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "62vh",
            maxHeight: "62vh"
          },
          [theme.breakpoints.down("xs")]: {
            height: "77vh",
            maxHeight: "77vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "89vh",
            maxHeight: "89vh"
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
            width: "60%",
            height: "100%",
            margin: "0 20vw 0 20vw",
            [theme.breakpoints.down("xxl")]: {
              width: "80%",
              height: "100%",
              margin: "0 10vw 0 10vw"
            }
          }}
        >
          <Box
            id="avatar-container"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.19rem",
              marginBottom: 1,
              [theme.breakpoints.down("sm")]: {
                gap: "0.5rem"
              },
              [theme.breakpoints.down("xs")]: {
                gap: "0.25rem"
              }
            }}
          >
            <Box id="photo-container">
              <Avatar
                alt="bachir-rzama"
                src={omarAvatar}
                variant="rounded"
                sx={{
                  width: "4.375rem",
                  height: "4.375rem",
                  flexShrink: "0",
                  [theme.breakpoints.down("xs")]: {
                    width: "1.40688rem",
                    height: "1.40688rem"
                  }
                }}
              />
            </Box>
            <Box
              id="name-container"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                id="name"
                component="p"
                sx={{
                  fontFamily: "Neat Chalk",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "112%",
                  letterSpacing: "0.15rem",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "0.7738rem !important"
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.638rem !important"
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "0.36175rem !important",
                    marginBottom: "0.2rem"
                  }
                }}
              >
                omar Zouhair
              </Typography>
              <Typography
                variant="workPosition"
                component="p"
                sx={{
                  margin: 0,
                  [theme.breakpoints.down("md")]: {
                    fontSize: "0.7738rem !important"
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "0.48238rem !important"
                  }
                }}
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
              [theme.breakpoints.down("xxl")]: {
                fontSize: "2.21244rem !important"
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "1.5744rem !important"
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3744rem !important"
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1744rem !important"
              }
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

export default DomainExpansion;
