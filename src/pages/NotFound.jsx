import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import notFound from "../assets/img/not-found.png";
import buttonBackground from "../assets/img/vector-104-stroke.png";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box
      id="not-found-main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover"
      }}
    >
      <Box
        id="not-found-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          marginBottom: 12
        }}
      >
        <Box id="image-container" sx={{ marginBottom: 2 }}>
          <img id="not-found-image" src={notFound} alt="not-found" />
        </Box>
        <Typography
          sx={{
            fontFamily: "Neat Chalk",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
            marginBottom: 5
          }}
        >
          No solution
        </Typography>
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
            marginBottom: "5vh",
            [theme.breakpoints.down("md")]: {
              height: "30vh"
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
            href="/"
          >
            BACK HOME
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default NotFound;
