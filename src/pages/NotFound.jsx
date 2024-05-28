import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import notFound from "../assets/img/not-found.png";
import buttonBackground from "../assets/img/vector-104-stroke.png";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box
      id="not-found-main-body"
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
        id="not-found-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          marginBottom: 12
        }}
      >
        <Box id="image-container" sx={{ marginBottom: 2 }}>
          <img id="not-found-image" src={notFound} alt="not-found" />
        </Box>
        <Typography
          sx={{
            fontFamily: "Neat Chalk",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
            marginBottom: 5
          }}
        >
          No solution
        </Typography>
        <Box
          id="button-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            backgroundImage: `url(${buttonBackground})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "2vh",
            width: "100%",
            height: "33vh",
            marginBottom: "5vh"
          }}
        >
          <Button
            sx={{
              width: "18.0625rem !important",
              height: "6.125rem",
              padding: "10px 20px",
              flexShrink: 0,
              boxSizing: "border-box"
            }}
            href="/"
          >
            BACK HOME
          </Button>
        </Box>
      </Box>
    </Box>
    // <Box
    //   id="not-found-main-body"
    //   sx={{
    //     background: "plum",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "stretch",
    //     flexDirection: "column",
    //     position: "relative",
    //     backgroundColor: theme.palette.background.default,
    //     backgroundSize: "cover"
    //   }}
    // >
    //   <Box
    //     id="not found-container"
    //     sx={{

    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       flexDirection: "column",
    //       position: "relative",
    //       width: "100%",
    //       overflowX: "0px",
    //       height: "100vh",
    //       maxHeight: "100vh",
    //       marginBottom: 12
    //     }}
    //   >
    //     <Box id="image-container" sx={{ background: "green", marginBottom: 2 }}>
    //       <img id="not-found-image" src={notFound} alt="not-found" />
    //     </Box>
    //     <Typography
    //       sx={{
    //         fontFamily: "Neat Chalk",
    //         fontSize: "1rem",
    //         fontStyle: "normal",
    //         fontWeight: "400",
    //         lineHeight: "150%"
    //       }}
    //     >
    //       No solution
    //     </Typography>
    //     <Box
    //     id="button-container"
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       flexDirection: "column",
    //       position: "relative",
    //       backgroundImage: `url(${buttonBackground})`,
    //       backgroundSize: "100%",
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "center",
    //       paddingTop: "2vh",
    //       width: "auto",
    //       height: "33vh",
    //       marginBottom: "20vh"
    //     }}
    //   >
    //     <Button>BACK HOME</Button>
    //   </Box>
    //   </Box>
    // </Box>
  );
};
export default NotFound;
