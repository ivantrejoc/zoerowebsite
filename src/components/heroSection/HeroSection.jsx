import { Box, Typography } from "@mui/material"

const HeroSection = () => {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "start",
      alignItems: "start",
      flexDirection: "column",
      position: "relative",
      width: "90vw",
      height: "65vh",
      margin: "0 5vw 0 5vw",
      maxHeight: "120vh"
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
      &nbsp;WE SOLVE THE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♦&nbsp;MILLENNIUM
      &nbsp;&nbsp;&nbsp;&nbsp;EQUATIONS
    </Typography>
  </Box>
  )
}
export default HeroSection
