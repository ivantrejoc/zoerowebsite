import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection";
import CheckIcon from "@mui/icons-material/Check";
import coefficientsImage from "../assets/img/coefficients-image.png";
import buttonBackground from "../assets/img/vector-104-stroke.png";
import binaryStripe from "../assets/img/binary-stripe.png";
import coefficientsMobile from "../assets/img/coefficientes-mobile.png";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      {/* HERO SECTION */}
      <Box
        id="hero-two-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          height: "35vh",
          maxHeight: "35vh",
          marginBottom: 12,
          [theme.breakpoints.down("xxl")]: {
            height: "80vh",
            justifyContent: "center"
          },
          [theme.breakpoints.down("md")]: {
            marginBottom: 4
          },
          [theme.breakpoints.down("sm")]: {
            height: "30vh"
          },
          [theme.breakpoints.down("xs")]: {
            height: "25vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "25vh"
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
            width: "88%",
            height: "100%",
            margin: "0 6vw 0 6vw",
            maxHeight: "100%",
            [theme.breakpoints.down("xxl")]: {
              height: "80vh",
              justifyContent: "center"
            }
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              width: "100%",
              marginTop: "2vh",
              whiteSpace: "pre-line",
              [theme.breakpoints.down("xxl")]: {
                fontSize: "9rem"
              },
              [theme.breakpoints.down("xl")]: {
                fontSize: "6.5rem"
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "5.4375rem"
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "2.9375rem"
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "2.5375rem"
              },
              [theme.breakpoints.down("xxs")]: {
                fontSize: "2.2375rem"
              }
            }}
          >
            LET’S SOLVE TOGETHER
          </Typography>
        </Box>
      </Box>
      {/* FORM SECTION */}
      <Box
        id="form-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "140vh",
          marginBottom: 10,
          [theme.breakpoints.down("xxl")]: {
            height: "135vh",
            marginBottom: 20
          },
          [theme.breakpoints.down("md")]: {
            height: "165vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xs")]: {
            height: "145vh"
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
            width: "88%",
            height: "100%",
            margin: "0 6vw 0 6vw"
          }}
        >
          <Box
            id="title-container"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              position: "relative",
              width: "100%",
              height: "10vh",
              padding: "5vh 0 5vh 0",
              maxHeight: "10vh",
              marginBottom: 4,
              [theme.breakpoints.down("md")]: {
                marginBottom: 2
              },
              [theme.breakpoints.down("sm")]: {
                marginBottom: 1
              }
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                [theme.breakpoints.down("xxl")]: {
                  width: "60%"
                },
                [theme.breakpoints.down("md")]: {
                  width: "80%"
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.375rem"
                },
                [theme.breakpoints.down("xxs")]: {
                  fontSize: "1.175rem"
                }
              }}
            >
              GENERAL VARIABLES
            </Typography>
          </Box>

          <Grid
            container
            spacing={0}
            columnGap={2}
            sx={{
              width: "100%",
              height: "40vh",
              padding: 0,
              overflowX: "hidden",
              marginBottom: 10,
              [theme.breakpoints.down("xxl")]: {
                height: "33vh"
              },
              [theme.breakpoints.down("md")]: {
                height: "70vh",
                marginBottom: 4
              },
              [theme.breakpoints.down("xs")]: {
                height: "55vh"
              }
            }}
          >
            <Grid
              item
              xxxs={12}
              lg={5.50}
              xxxl={5.93}
              sx={{
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                padding: 0,
                margin: 0
              }}
            >
              <Typography
                variant="formLabel"
                component="h3"
                sx={{
                  marginBottom: 1,
                  padding: 0,
                  marginLeft: 0,
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.125rem"
                  }
                }}
              >
                First & Last Name
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Your Full Name"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "2px solid #737373"
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFF"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green"
                    },
                    [theme.breakpoints.down("sm")]: {
                      height: "2.75rem"
                    }
                  }
                }}
                InputProps={{
                  endAdornment: <CheckIcon position="end" />
                }}
              />
            </Grid>
            <Grid
              item
              xxxs={12}
              lg={5.50}
              xxxl={5.93}
              sx={{
                height: "fit-content",
                padding: 0,
                margin: 0
              }}
            >
              <Typography
                variant="formLabel"
                component="h3"
                sx={{
                  marginBottom: 1,
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.125rem"
                  }
                }}
              >
                Company Email
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="you@yourcompany.com"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "2px solid #737373"
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFF"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green"
                    },
                    [theme.breakpoints.down("sm")]: {
                      height: "2.75rem"
                    }
                  }
                }}
                InputProps={{
                  endAdornment: <CheckIcon position="end" />
                }}
              />
            </Grid>
            <Grid
              item
              xxxs={12}
              lg={5.50}
              xxxl={5.93}
              sx={{
                height: "fit-content",
                padding: 0,
                margin: 0
              }}
            >
              <Typography
                variant="formLabel"
                component="h3"
                sx={{
                  marginBottom: 1,
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.125rem"
                  }
                }}
              >
                Company Name
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Nice to meet you!"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "2px solid #737373"
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFF"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green"
                    },
                    [theme.breakpoints.down("sm")]: {
                      height: "2.75rem"
                    }
                  }
                }}
                InputProps={{
                  endAdornment: <CheckIcon position="end" />
                }}
              />
            </Grid>
            <Grid
              item
              xxxs={12}
              lg={5.50}
              xxxl={5.93}
              sx={{
                height: "fit-content",
                padding: 0,
                margin: 0
              }}
            >
              <Typography
                variant="formLabel"
                component="h3"
                sx={{
                  marginBottom: 1,
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.125rem"
                  }
                }}
              >
                Your Project’s Idea
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="In One Line"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "2px solid #737373"
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFF"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green"
                    },
                    [theme.breakpoints.down("sm")]: {
                      height: "2.75rem"
                    }
                  }
                }}
                InputProps={{
                  endAdornment: <CheckIcon position="end" />
                }}
              />
            </Grid>
          </Grid>
          <Box
            id="title-two-container"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              position: "relative",
              width: "100%",
              height: "10vh",
              padding: "5vh 0 5vh 0",
              gap: "55%",
              maxHeight: "10vh",
              marginBottom: 4,
              [theme.breakpoints.down("sm")]: {
                marginBottom: 1
              }
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.375rem"
                },
                [theme.breakpoints.down("xxs")]: {
                  fontSize: "1.315rem"
                }
              }}
            >
              SELECT YOUR COEFFICIENTS
            </Typography>
          </Box>
          <Box
            id="data-container"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              position: "relative",
              width: "74vw",
              height: "70vh",
              margin: "0 auto 0 7vw",
              [theme.breakpoints.down("xxl")]: {
                height: "60vh",
                margin: "0 auto 0 6vw"
              }
            }}
          >
            {isMobile && (
              <img
                id="coefficient-image"
                src={coefficientsMobile}
                alt="coefficients-image"
              />
            )}
            {!isMobile && (
              <img
                id="coefficient-image"
                src={coefficientsImage}
                alt="coefficients-image"
              />
            )}
          </Box>
        </Box>
      </Box>
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
          width: "100%",
          overflowX: "hidden",
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
      {/* BUTTON AREA */}
      <Box
        id="button-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${buttonBackground})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "2vh",
          width: "100%",
          height: "33vh",
          marginBottom: "20vh",
          [theme.breakpoints.down("md")]: {
            height: "30vh",
            marginBottom: 4
          },
          [theme.breakpoints.down("xs")]: {
            height: "25vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "23vh"
          }
        }}
      >
        <Button
          id="submit-button"
          sx={{
            [theme.breakpoints.down("xxl")]: {
              width: "23.125rem !important",
              height: "5.525rem !important",
              fontSize: "1.325rem !important"
            },
            [theme.breakpoints.down("md")]: {
              width: "12.71506rem !important",
              height: "3.19375rem !important",
              fontSize: "0.682rem !important",
              strokeWidth: "2.194px !important",
              border: "solid 5px #22505D !important"
            },
            [theme.breakpoints.down("xs")]: {
              border: "solid 4px #22505D !important"
            },
            [theme.breakpoints.down("xxs")]: {
              border: "solid 3.5px #22505D !important"
            }
          }}
        >
          SEND US YOUR EQUATION
        </Button>
      </Box>
      <HeroTwoSection />
    </Box>
  );
};
export default Contact;
