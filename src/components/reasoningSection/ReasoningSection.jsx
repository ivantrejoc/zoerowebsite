import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ellipse from "../../assets/img/ellipse-reasoning.svg";
const ReasoningSection = () => {
  const theme = useTheme();
  return (
    <Box
      id="reasoning"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        width: "100vw",
        height: "100vh",
        maxHeight: "100vh",
        marginTop: "1vh",
        [theme.breakpoints.down("md")]: {
          height: "140vh",
          maxHeight: "140vh",
          marginBottom: 10
        },
        [theme.breakpoints.down("sm")]: {
          height: "110vh",
          maxHeight: "110vh",
          marginBottom: 10
        }
      }}
    >
      <Box
        id="title-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          position: "relative",
          width: "100vw",
          height: "10vh",
          padding: "10vh 0 10vh 0",
          maxHeight: "100vh"
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            marginLeft: "8vw",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.375rem",
              marginLeft: "5vw"
            }
          }}
        >
          THE REASONING
        </Typography>
      </Box>

      <Box
        id="content-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100vw",
          height: "90vh",
          padding: "0 30vw 0 30vw",
          gap: "3vw",
          maxHeight: "100vh",
          [theme.breakpoints.down("xxl")]: {
            padding: "0 23vw 0 23vw"
          },
          [theme.breakpoints.down("xl")]: {
            padding: "0 15vw 0 15vw"
          },
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            height: "100%",
            maxHeight: "none"
          },
          [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            alignItems: "start",
            padding: "0 3vw 0 3vw"
          },
          [theme.breakpoints.down("xs")]: {
            justifyContent: "center"
          },
          [theme.breakpoints.down("xxs")]: {
            justifyContent: "center",
            padding: "0 8vw 0 8vw"
          }
        }}
      >
        <Box
          id="reasoning-image-container"
          sx={{
            [theme.breakpoints.down("md")]: {
              margin: "0 11vw 0 11vw"
            },
            [theme.breakpoints.down("sm")]: {
              margin: "0 5vw 0 5vw"
            },
            [theme.breakpoints.down("xs")]: {
              margin: "0 0.02vw 0 0.02vw"
            }
          }}
        >
          <img id="reasoning-image" src={ellipse} alt="ellipse" />
        </Box>
        <Box
          id="reasoning-text"
          sx={{
            width: "24.1875rem",
            height: "10.1875rem",
            flexShrink: 0,
            boxSizing: "border-box",
            [theme.breakpoints.down("md")]: {
              margin: "0 11vw 0 11vw"
            },
            [theme.breakpoints.down("sm")]: {
              width: "14.1875rem",
              height: "7.1875rem",
              margin: "0 5vw 0 5vw"
            },
            [theme.breakpoints.down("xs")]: {
              margin: "0 0.02vw 0 0.02vw"
            }
          }}
        >
          <Typography
            sx={{
              color: "#8A8A8A",
              fontFamily: "Urbanist",
              fontSize: "0.875rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "112%",
              letterSpacing: "0.14875rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.57431rem"
              }
            }}
          >
            SCROLL DOWN
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              marginBottom: "0.25rem",
              textTransform: "uppercase",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.23063rem"
              }
            }}
          >
            General Premise
          </Typography>
          <Typography
            variant="text"
            sx={{
              whiteSpace: "pre-line",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.90244rem"
              }
            }}
            component="p"
          >
            If your company prioritizes
          </Typography>
          <Typography
            variant="text"
            sx={{
              whiteSpace: "pre-line",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.90244rem"
              }
            }}
            component="p"
          >
            - Innovation and Adaptability
          </Typography>
          <Typography
            variant="text"
            sx={{
              whiteSpace: "pre-line",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.90244rem"
              }
            }}
            component="p"
          >
            - Quality and Excellence
          </Typography>
          <Typography
            variant="text"
            sx={{
              whiteSpace: "pre-line",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.90244rem"
              }
            }}
            component="p"
          >
            - Integrity and Transparency
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ReasoningSection;
