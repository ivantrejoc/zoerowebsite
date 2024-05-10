import { Box, Typography } from "@mui/material";
import diamond from "../../assets/icons/diamond.svg";
import brands from "../../assets/img/brands1.jpg";
import brandsTwo from "../../assets/img/brands2.png";
import brandsThree from "../../assets/img/brands3.png";

const ExperimentsSection = () => {
  return (
    <Box
        id="experiment-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          marginBottom: "15vh",
          width: "100vw",
          height: "140vh"
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
            gap: "55vw",
            maxHeight: "100vh"
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              marginLeft: "8vw"
            }}
          >
            THE EXPERIMENTS
          </Typography>

          <img src={diamond} alt="diamond" />
        </Box>
        <Box
          id="experiments-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            position: "relative",
            width: "84vw",
            height: "113vh"
          }}
        >
          <div id="experiments-image-container">
            <div id="left-images">
              <img src={brands} alt="brands-1" style={{ width: "100%" }} />
            </div>
            <div id="right-images">
              <div id="up-right-images">
                <img
                  src={brandsTwo}
                  alt="brands-1"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div id="down-right-images">
                <img
                  src={brandsThree}
                  alt="brands-three"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
  )
}
export default ExperimentsSection