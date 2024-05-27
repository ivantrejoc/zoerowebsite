import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      id="main-body"
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
        id="header-container"
        sx={{
          background: "plum",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          height: "72vh",
          maxHeight: "100vh"
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
      width: "90%",
      height: "100%",
      margin: "0 5vw 0 5vw",
      maxHeight: "120vh"
    }}>
      
       </Box>
      </Box>
    </Box>
  );
};
export default Contact;
