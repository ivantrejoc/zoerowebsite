import { Box, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import zakariaAvatar from "../../assets/img/zakaria-avatar.png";

const HeroTwoSection = () => {
  const theme = useTheme();

  return (
    <Box
      id="hero-2"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        height: "40vh",
        maxHeight: "40vh",
        paddingLeft: "8.25vw",
        marginBottom: "5vh",
        [theme.breakpoints.down("xxl")]: {
          height: "50vh",
          maxHeight: "50vh",
        },
        [theme.breakpoints.down("md")]: {
          height: "40vh"
        },
        [theme.breakpoints.down("sm")]: {
          height: "36vh"
        },
        [theme.breakpoints.down("xs")]: {
          height: "20vh"
        },
        [theme.breakpoints.down("xxs")]: {
          height: "22vh"
        }
      }}
    >
      <Box
        id="hero-contanier"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          position: "relative",
          gap: 2.19,
          width: "70.25rem",
          height: "100%",
          [theme.breakpoints.down("md")]: {
            width: "40.25rem",
            gap: 1
          },
          [theme.breakpoints.down("sm")]: {
            width: "30.25rem",
            gap: "0rem"
          },
          [theme.breakpoints.down("xs")]: {
            width: "19.725rem",
            gap: 1
          },
          [theme.breakpoints.down("xxs")]: {
            width: "16.725rem",
            gap: 0.25
          }
        }}
      >
        <Box
          id="text-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "stretch",
            height: "27vh",
            width: "100%",
            padding: "0px",
            marginBottom: 0.5
          }}
        >
          <Box>
            <Typography
              id="hero-2-text"
              sx={{
                fontFamily: "Neat Chalk",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "252%",
                letterSpacing: "0.15rem",
                textTransform: "uppercase",
                margin: 0,
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.8238rem !important",
                  letterSpacing: "0.10rem !important"
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.638rem !important"
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "0.4238rem !important",
                  letterSpacing: "0.05rem !important"
                }
              }}
            >
              {
                '"In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."'
              }
            </Typography>
          </Box>
        </Box>
        <Box
          id="avatar-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.19rem",
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
              alt="zakaria-ambari"
              src={zakariaAvatar}
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
              Zakaria Ambari
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
              Zœro Mathematician
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HeroTwoSection;
