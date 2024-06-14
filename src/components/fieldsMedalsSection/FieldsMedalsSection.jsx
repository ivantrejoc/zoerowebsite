import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import binaryFrame from "../../assets/img/bynary-frame.png";
import CardBinary from "../cardBinary/cardBinary";

const FieldsMedalsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="fields-medals-container"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        marginBottom: "15vh",
        width: "100vw",
        [theme.breakpoints.down("xl")]: {
          marginBottom: "25vh",
        },
        [theme.breakpoints.down("md")]: {
          height: "183vh",
          marginBottom: 4,
        },
        [theme.breakpoints.down("xs")]: {
          height: "180vh",
        },
        [theme.breakpoints.down("xxs")]: {
          height: "150vh",
        },
        [theme.breakpoints.down("xxxs")]: {
          height: "130vh",
        },
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
          height: "5vh",
          padding: "10vh 0 10vh 0",
          [theme.breakpoints.down("md")]: {
            padding: "5vh 0 5vh 0",
            marginBottom: 2,
          },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            marginLeft: "8vw",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.375rem",
            },
          }}
        >
          FIELDS MEDALS
        </Typography>
      </Box>
      <Box
        id="data-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          position: "relative",
          width: "83vw",
          height: "56.5vh",
          margin: "0 1vw 0 0",
          [theme.breakpoints.down("md")]: {
            height: "200vh",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {isMobile ? (
          <div id="grid-container">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="item" key={index}>
                <CardBinary />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                      marginTop: "1.25rem",
                      [theme.breakpoints.down("xs")]: {
                        fontSize: "1.55106rem",
                      },
                      [theme.breakpoints.down("xxs")]: {
                        fontSize: "1.375rem",
                      },
                    }}
                  >
                    Award One
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      color: "#7C7C7C",
                      fontWeight: "600",
                      [theme.breakpoints.down("xs")]: {
                        fontSize: "1.1744rem",
                      },
                    }}
                  >
                    Coming Soon
                  </Typography>
                </Box>
              </div>
            ))}
          </div>
        ) : (
          <div id="grid-container">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                className="item"
                key={index}
                style={{
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <CardBinary />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                      marginTop: "1.25rem",
                    }}
                  >
                    Award One
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      color: "#7C7C7C",
                      fontWeight: "600",
                    }}
                  >
                    Coming Soon
                  </Typography>
                </Box>
              </div>
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
};
export default FieldsMedalsSection;
