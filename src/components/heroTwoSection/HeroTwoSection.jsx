import { Box, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import zakariaAvatar from "../../assets/img/zakaria-avatar.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

const HeroTwoSection = () => {
  const theme = useTheme();
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const jobRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  useEffect(() => {
    if (isVisible) {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          nameRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          jobRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8 },
          "-=0.6"
        );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Box
      id="hero-2"
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        height: "40vh",
        maxHeight: "40vh",
        paddingLeft: "8.25vw",
        marginBottom: "3vh",
        [theme.breakpoints.down("xxl")]: {
          height: "50vh",
          maxHeight: "50vh",
        },
        [theme.breakpoints.down("md")]: {
          height: "40vh",
        },
        [theme.breakpoints.down("sm")]: {
          height: "36vh",
        },
        [theme.breakpoints.down("xs")]: {
          height: "20vh",
        },
        [theme.breakpoints.down("xxs")]: {
          height: "22vh",
        },
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
          height: "100%",
          [theme.breakpoints.down("md")]: {
            width: "40.25rem",
            gap: 1,
          },
          [theme.breakpoints.down("sm")]: {
            width: "30.25rem",
            gap: "0rem",
          },
          [theme.breakpoints.down("xs")]: {
            width: "19.725rem",
            gap: 1,
          },
          [theme.breakpoints.down("xxs")]: {
            width: "16.725rem",
            gap: 0.25,
          },
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
            marginBottom: 0.5,
          }}
        >
          <Box>
            <Typography
              ref={textRef}
              id="hero-2-text"
              sx={{
                fontFamily: "Neat Chalk",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "252%",
                letterSpacing: "0.15rem",
                textTransform: "uppercase",
                margin: 0,
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.8238rem !important",
                  letterSpacing: "0.10rem !important",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.638rem !important",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "0.4238rem !important",
                  letterSpacing: "0.05rem !important",
                },
              }}
            >
              {
                '"In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."'
              }
            </Typography>
          </Box>
        </Box>
        <Box
          id="avatar-container"
          sx={{
            width: "auto",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.19rem",
            [theme.breakpoints.down("sm")]: {
              gap: "0.5rem",
            },
            [theme.breakpoints.down("xs")]: {
              gap: "0.25rem",
            },
          }}
        >
          <Box id="photo-container">
            <Avatar
              alt="zakaria-ambari"
              src={zakariaAvatar}
              variant="rounded"
              sx={{
                width: "4.375rem",
                height: "4.375rem",
                flexShrink: "0",
                [theme.breakpoints.down("xs")]: {
                  width: "1.40688rem",
                  height: "1.40688rem",
                },
              }}
            />
          </Box>
          <Box
            id="name-container"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              ref={nameRef}
              id="name"
              component="p"
              sx={{
                fontFamily: "Neat Chalk",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "112%",
                letterSpacing: "0.15rem",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
                whiteSpace: "nowrap",
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.7738rem !important",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.638rem !important",
                },
                [theme.breakpoints.down("xs")]: {
                  marginBottom: "0.2rem",
                },
              }}
            >
              Zakaria Ambari
            </Typography>
            <Typography
              ref={jobRef}
              variant="workPosition"
              component="p"
              sx={{
                margin: 0,
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.7738rem !important",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "0.48238rem !important",
                },
              }}
            >
              Zœro Mathematician
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroTwoSection;
