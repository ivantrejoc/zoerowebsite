import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection";
import CheckIcon from "@mui/icons-material/Check";
import coefficientsImage from "../assets/img/coefficients-image.png";
import buttonBackground from "../assets/img/vector-104-stroke.png";
import binaryStripe from "../assets/img/binary-stripe.png";

const Contact = () => {
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
          overflowX: "0px",
          height: "43vh",
          maxHeight: "43vh",
          marginBottom: 12,
          [theme.breakpoints.down("xxl")]: {
            height: "80vh",
            justifyContent: "center"
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
                fontSize: "7rem"
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
          maxHeight: "140vh",
          marginBottom: 10
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
              gap: "55%",
              maxHeight: "10vh",
              marginBottom: 4
            }}
          >
            <Typography variant="h2" component="h2">
              GENERAL VARIABLES
            </Typography>
          </Box>

          <Grid
            container
            spacing={0}
            columnGap={2}
            sx={{
              width: "100%",
              height: "25vh",
              padding: 0,
              overflowX: "hidden",
              marginBottom: 10
            }}
          >
            <Grid
              item
              xs={5.93}
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
                sx={{ marginBottom: 1, padding: 0, marginLeft: 0 }}
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
              xs={5.93}
              sx={{
                height: "fit-content",
                padding: 0,
                margin: 0
              }}
            >
              <Typography
                variant="formLabel"
                component="h3"
                sx={{ marginBottom: 1 }}
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
              xs={5.93}
              sx={{
                height: "fit-content",
                padding: 0,
                margin: 0
              }}
            >
              <Typography
                variant="formLabel"
                component="h3"
                sx={{ marginBottom: 1 }}
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
              xs={5.93}
              sx={{
                height: "fit-content",
                padding: 0,
                margin: 0
              }}
            >
              <Typography
                variant="formLabel"
                component="h3"
                sx={{ marginBottom: 1 }}
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
              marginBottom: 4
            }}
          >
            <Typography variant="h2" component="h2">
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
              margin: "0 auto 0 8vw"
            }}
          >
            <img
              id="coefficient-image"
              src={coefficientsImage}
              alt="coefficients-image"
            />
          </Box>
        </Box>
      </Box>
      <Box
        id="button-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${buttonBackground})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "2vh",
          width: "100%",
          overflowX: "hidden",
          height: "33vh",
          marginBottom: "20vh"
        }}
      >
        <Button>SEND US YOUR EQUATION</Button>
      </Box>
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
          marginBottom: "15vh"
        }}
      />
      <HeroTwoSection />
    </Box>
  );
};
export default Contact;
