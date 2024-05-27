import { Box, Typography } from "@mui/material";
import coefficientsImage from "../../assets/img/coefficients-image.png";

const CoefficientsSection = () => {
  return (
    <Box
        id="coefficient-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          position: "relative",
          marginBottom: "15vh",
          width: "100vw",
          height: "100vh"
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
              marginLeft: "8vw"
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
            width: "74vw",
            height: "70vh",
            margin: "0 auto 0 12vw"
          }}
        >
          <img
            id="coefficient-image"
            src={coefficientsImage}
            alt="coefficients-image"
          />
        </Box>
      </Box>
  )
}
export default CoefficientsSection