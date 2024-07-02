import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import coefficientsImage from "../../assets/img/coefficients-image.png";
import coefficientsMobile from "../../assets/img/coefficientes-mobile.png";

const CoefficientsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      id="coefficients"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
        position: "relative",
        marginBottom: "15vh",
        width: "100vw",
        height: "80vh",
        [theme.breakpoints.down("xs")]: {
          marginBottom: 4
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
          height: "5vh",
          padding: "10vh 0 10vh 0"
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            marginLeft: "8vw",
            fontSize: "2.5rem",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.375rem"
            }
          }}
        >
          THE COEFFICIENTS
        </Typography>
      </Box>
      <Box
        id="data-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          position: "relative",
          width: "70vw",
          height: "66vh",
          margin: "0 auto 0 12vw",
          [theme.breakpoints.down("sm")]: {
            margin: "0 auto 0 15vw"
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
  );
};
export default CoefficientsSection;
