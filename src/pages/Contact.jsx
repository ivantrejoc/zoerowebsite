import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
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
      {/* HERO SECTION */}
      <Box
        id="hero-two-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "43vh",
          maxHeight: "43vh",
          marginBottom: 10
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "88%",
            height: "100%",
            margin: "0 6vw 0 6vw",
            maxHeight: "100%"
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              width: "100%",
              marginTop: "2vh",
              whiteSpace: "pre-line"
            }}
          >
            LET’S SOLVE TOGETHER
          </Typography>
        </Box>
      </Box>
      {/* FORM SECTION */}
      <Box
        id="form-container"
        sx={{
          background: "plum",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          height: "130vh",
          maxHeight: "130vh"
        }}
      >
        <Box
          sx={{
            background: "orange",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "88%",
            height: "100%",
            margin: "0 6vw 0 6vw",
            maxHeight: "100%"
          }}
        ></Box>
      </Box>
    </Box>
  );
};
export default Contact;
