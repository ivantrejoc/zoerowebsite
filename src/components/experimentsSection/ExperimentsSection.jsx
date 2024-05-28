import { Box, Typography } from "@mui/material";
import diamond from "../../assets/icons/diamond.svg";
import brands from "../../assets/img/brands1.jpg";
import brandsTwo from "../../assets/img/brands2.png";

import leadBrand from "../../assets/img/leads-forge.png";
import teuserBrand from "../../assets/img/imageTeuserMain.png";
import expirementsBrand from "../../assets/img/frame-300.png";

const ExperimentsSection = () => {
  return (
    <Box
      id="experiments"
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
          width: "80vw",
          height: "113vh"
        }}
      >
        <div id="experiments-image-container">
          <div id="left-images">
            <a href="/domain-expansion">
              <img src={brands} alt="brands-1" style={{ width: "100%" }} />
            </a>
          </div>
          <div id="right-images">
            <div id="up-right-images">
              <a href="/seafena">
                <img
                  src={brandsTwo}
                  alt="brands-1"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
            <Box id="down-right-images">
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    style={{
                      marginRight: "1rem",
                      width: "50%",
                      height: "20%"
                    }}
                  >
                    <a href="/leads-forge">
                      <img
                        src={leadBrand}
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                      />
                    </a>
                  </Box>
                  <Box
                    style={{
                      marginRight: "1rem",
                      width: "50%",
                      height: "auto"
                    }}
                  >
                    <a href="/experiments">
                      <img
                        src={expirementsBrand}
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                      />
                    </a>
                  </Box>
                </Box>
                <Box
                  style={{
                    marginTop: "1rem",
                    width: "47%",
                    height: "20%"
                  }}
                >
                  <a href="teuser">
                    <img
                      src={teuserBrand}
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                    />
                  </a>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </Box>
    </Box>
  );
};
export default ExperimentsSection;
