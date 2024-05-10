import { Box, Typography } from "@mui/material";
import binaryFrame from "../../assets/img/bynary-frame.png";
const FieldsMedalsSection = () => {
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
      height: "90vh"
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
        margin: "0 1vw 0 0"
      }}
    >
      <div id="grid-container">
        <div className="item">
          <img
            className="binary-frame"
            src={binaryFrame}
            alt="binary-frame"
          />
          <Typography
            variant="h4"
            component="h4"
            sx={{
              marginTop: "1.25rem"
            }}
          >
            Award One
          </Typography>
          <Typography
            variant="text"
            component="p"
            sx={{
              color: "#7C7C7C",
              fontWeight: "600"
            }}
          >
            Coming Soon
          </Typography>
        </div>
        <div className="item">
          <img
            className="binary-frame"
            src={binaryFrame}
            alt="binary-frame"
          />
          <Typography
            variant="h4"
            component="h4"
            sx={{
              marginTop: "1.25rem"
            }}
          >
            Award One
          </Typography>
          <Typography
            variant="text"
            component="p"
            sx={{
              color: "#7C7C7C",
              fontWeight: "600"
            }}
          >
            Coming Soon
          </Typography>
        </div>
        <div className="item">
          <img
            className="binary-frame"
            src={binaryFrame}
            alt="binary-frame"
          />
          <Typography
            variant="h4"
            component="h4"
            sx={{
              marginTop: "1.25rem"
            }}
          >
            Award One
          </Typography>
          <Typography
            variant="text"
            component="p"
            sx={{
              color: "#7C7C7C",
              fontWeight: "600"
            }}
          >
            Coming Soon
          </Typography>
        </div>
        <div className="item">
          <img
            className="binary-frame"
            src={binaryFrame}
            alt="binary-frame"
          />
          <Typography
            variant="h4"
            component="h4"
            sx={{
              marginTop: "1.25rem"
            }}
          >
            Award One
          </Typography>
          <Typography
            variant="text"
            component="p"
            sx={{
              color: "#7C7C7C",
              fontWeight: "600"
            }}
          >
            Coming Soon
          </Typography>
        </div>
        <div className="item">
          <img
            className="binary-frame"
            src={binaryFrame}
            alt="binary-frame"
          />
          <Typography
            variant="h4"
            component="h4"
            sx={{
              marginTop: "1.25rem"
            }}
          >
            Award One
          </Typography>
          <Typography
            variant="text"
            component="p"
            sx={{
              color: "#7C7C7C",
              fontWeight: "600"
            }}
          >
            Coming Soon
          </Typography>
        </div>
      </div>
    </Box>
  </Box>
  )
}
export default FieldsMedalsSection