import { Box, Typography, Avatar } from "@mui/material";
import zakariaAvatar from "../../assets/img/zakaria-avatar.png";

const HeroTwoSection = () => {
  return (
    <Box
      id="hero-2"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        height: "50vh",
        maxHeight: "50vh",
        paddingLeft: "8.25vw",
        marginBottom: "5vh"
      }}
    >
      <Box
        id="hero-contanier"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          position: "relative",
          gap: 2.19,
          width: "70.25rem",
          height: "100%"
        }}
      >
        <Box
          id="text-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "stretch",
            height: "27vh",
            width: "100%",
            padding: "0px",
            marginBottom: 0.5
          }}
        >
          <Box>
            <p id="hero-2-text">
              {
                '"In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."'
              }
            </p>
          </Box>
        </Box>
        <div id="avatar-container">
          <div id="photo-container">
            <Avatar
              alt="zakaria-ambari"
              src={zakariaAvatar}
              variant="rounded"
              sx={{
                width: "4.375rem",
                height: "4.375rem",
                flexShrink: "0"
              }}
            />
          </div>
          <div>
            <p id="name">Zakaria Ambari</p>
            <Typography variant="workPosition" component="p" sx={{ margin: 0 }}>
              Zœro Mathematician
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};
export default HeroTwoSection;
