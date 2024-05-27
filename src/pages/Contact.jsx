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
        CONTACT
         </Box>
  )
}
export default Contact