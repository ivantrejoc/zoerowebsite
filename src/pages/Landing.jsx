import { Box, useTheme } from "@mui/material";
import mainBackground from "../assets/img/vector-103-stroke.png";


export default function Landing() {
  const theme = useTheme();
console.log("LOS DETALLES DEL TEMA: ", theme);
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${mainBackground})`,
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh"
        }}
      ></Box>
    </Box>
  );
}
