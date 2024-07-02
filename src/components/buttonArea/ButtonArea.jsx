import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import gsap from "gsap";
import buttonBackground from "../../assets/img/vector-104-stroke.png";

const ButtonArea = () => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = document.getElementById("button-container");

    // Animación con GSAP para el contenedor
    const handleHover = () => {
      setIsHovered(true);
      gsap.to(container, {
        scale: 1.1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleHoverExit = () => {
      setIsHovered(false);
      gsap.to(container, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    // Añadir listeners de eventos al contenedor
    container.addEventListener("mouseenter", handleHover);
    container.addEventListener("mouseleave", handleHoverExit);

    return () => {
      container.removeEventListener("mouseenter", handleHover);
      container.removeEventListener("mouseleave", handleHoverExit);
    };
  }, []); 

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
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "2vh",
        width: "100%",
        height: "22vh",
        marginBottom: "12vh",
        [theme.breakpoints.down("md")]: {
          height: "30vh",
          marginBottom: 4,
        },
        [theme.breakpoints.down("xs")]: {
          height: "25vh",
        },
        [theme.breakpoints.down("xxs")]: {
          height: "23vh",
        },
      }}
    >
      <Button
        href="/contact"
        sx={{
          [theme.breakpoints.down("xxl")]: {
            width: "23.125rem !important",
            height: "5.525rem !important",
            fontSize: "1.325rem !important",
          },
          [theme.breakpoints.down("md")]: {
            width: "12.71506rem !important",
            height: "3.19375rem !important",
            fontSize: "0.682rem !important",
            strokeWidth: "2.194px !important",
            border: "solid 5px #22505D !important",
          },
          [theme.breakpoints.down("xs")]: {
            border: "solid 4px #22505D !important",
          },
          [theme.breakpoints.down("xxs")]: {
            border: "solid 3.5px #22505D !important",
          },
          background: isHovered ? "#22505D" : "transparent", 
          color: isHovered ? "#ffffff" : "#22505D", 
          "&:hover": {
            background: isHovered ? "#22505D" : "#ffffff", 
            color: isHovered ? "#ffffff" : "#22505D", 
          },
        }}
      >
        SEND US YOUR EQUATION
      </Button>
    </Box>
  );
};

export default ButtonArea;
