import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";




const LeadsForge = () => {
    const theme = useTheme();
  return (
    <Box
      id="leads-forge-main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover"
      }}
    >LEADS FORGE</Box>
  )
}
export default LeadsForge