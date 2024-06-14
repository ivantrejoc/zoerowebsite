import { useEffect, useRef } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { gsap } from 'gsap';

const HeroSection = () => {
  const theme = useTheme();
  const titleRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.5 }
    );
  }, []);

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
        maxHeight: "120vh",
        [theme.breakpoints.down("xxl")]: {
          height: "120vh",
          justifyContent: "center",
        },
      }}
    >
      <Typography
        ref={titleRef}
        variant="h1"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "2vh",
          whiteSpace: "pre-line",
          [theme.breakpoints.down("xxxl")]: {
            fontSize: "8rem",
          },
          [theme.breakpoints.down("xxl")]: {
            fontSize: "8rem",
          },
          [theme.breakpoints.down("xl")]: {
            fontSize: "6rem",
          },
          [theme.breakpoints.down("lg")]: {
            fontSize: "5.3375rem",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "5.4375rem",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "3.3375rem",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "2.6375rem",
          },
          [theme.breakpoints.down("xxs")]: {
            fontSize: "2.2375rem",
          },
        }}
      >
        &nbsp;WE SOLVE THE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♦&nbsp;MILLENNIUM
        &nbsp;&nbsp;&nbsp;&nbsp;EQUATIONS
      </Typography>
    </Box>
  );
};

export default HeroSection;
