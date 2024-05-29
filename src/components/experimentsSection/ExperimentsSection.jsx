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
        width: "100%",
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
          width: "100%",
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
          width: "83%",
          height: "99.1vh"
        }}
      >
        <Box
          id="experiments-image-container"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexShrink: 0,
            boxSizing: "border-box",
            gap: 4
          }}
        >
          <Box
            id="left-images"
            sx={{
              background: "green",
              width: "50.225rem",
              height: "50.225rem",
              flexShrink: 0,
              boxSizing: "border-box"
            }}
          >
            <a href="/domain-expansion">
              <img id="left-side-img" src={brands} alt="brands-1" />
            </a>
          </Box>
          <Box
            id="right-images"
            sx={{
              width: "38rem",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: 4
            }}
          >
            <Box
              id="up-right-images"
              sx={{
                width: "100%",
                height: "28.38215rem",
                flexShrink: 0,
                boxSizing: "border-box"
              }}
            >
              <a href="/seafena">
                <img id="seafena-img" src={brandsTwo} alt="brands-1" />
              </a>
            </Box>
            <Box
              id="down-right-images"
              sx={{
                width: "100%",
                height: "19.8rem",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                gap: 4,
                flexShrink: 0,
                boxSizing: "border-box"
              }}
            >
              <Box
                id="right-images"
                sx={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4
                }}
              >
                <Box
                  id="top-image"
                  sx={{
                    background: "pink",
                    width: "100%",
                    height: "35%"
                  }}
                >
                  <a href="/leads-forge">
                    <img
                      id="lead-forge-img"
                      src={leadBrand}
                      alt="leads-forge-logo"
                    />
                  </a>
                </Box>
                <Box
                  id="bottom-image"
                  sx={{
                    background: "pink",
                    width: "100%",
                    height: "60%"
                  }}
                >
                  <a href="/teuser">
                    <img id="teuser-img" src={teuserBrand} alt="teuser-logo" />
                  </a>
                </Box>
              </Box>
              <Box
                id="left-image"
                sx={{
                  background: "salmon",
                  width: "70%",
                  height: "100%"
                }}
              >
                <a href="/experiments">
                  <img
                    id="experiment-img"
                    src={expirementsBrand}
                    alt="experiments"
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ExperimentsSection;
