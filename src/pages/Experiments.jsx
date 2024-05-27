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
        EXPERIMENTS
    </Box>
  );
};
export default Experiments;
