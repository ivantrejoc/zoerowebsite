import { Box, Button } from "@mui/material";
import buttonBackground from "../../assets/img/vector-104-stroke.png";

const ButtonArea = () => {
  return (
    <Box
        id="button-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${buttonBackground})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "2vh",
          width: "100vw",
          height: "33vh",
          marginBottom: "10vh"
        }}
      >
        <Button>SEND US YOUR EQUATION</Button>
      </Box>
  )
}
export default ButtonArea;