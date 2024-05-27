import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const Experiments = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact-main-body"
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
        id="hero-experiment-container"
        sx={{
          background: "plum",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "45vh",
          maxHeight: "45vh",
          marginBottom: 12
        }}
      >
        <Box
          sx={{
            background: "gold",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "87%",
            height: "100%",
            margin: "0 6.5vw 0 6.5vw",
            maxHeight: "100%"
          }}
        >
          <Box
            sx={{
              background: "red",
              width: "25%",
              height: "33%",
              display: "flex",
              flexDirection: "column"
            }}
          ></Box>
          <Box
            sx={{
              background: "green",
              width: "80%",
              height: "33%",
              display: "flex",
              flexDirection: "column"
            }}
          ></Box>
          <Box
            sx={{
              background: "blue",
              width: "40%",
              height: "33%",
              display: "flex",
              flexDirection: "column"
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Experiments;
