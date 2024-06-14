import React, { useEffect, useRef } from "react";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { gsap } from "gsap";

const BinaryFlickerAnimation = () => {
  const binaryRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const binaryTimeline = gsap.timeline({ repeat: -1 });

    binaryTimeline.to(binaryRef.current, {
      opacity: 1,
      text: "1",
      duration: 0.5,
    });
    binaryTimeline.to(
      binaryRef.current,
      { opacity: 0, text: "0", duration: 0.5 },
      "+=0.5"
    );

    return () => {
      binaryTimeline.kill();
    };
  }, []);

  return (
    <Card
      sx={{
        width: "85%",
        height: "63%",
        margin: "auto",
        marginTop: 4,
        background: "#3C3C3C",
        [theme.breakpoints.down("sm")]: {
          maxWidth: 300,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "1rem",
          height: "auto", // Ajusta la altura según sea necesario
          [theme.breakpoints.down("sm")]: {
            height: "15vh",
          },
        }}
      >
        <Typography
          ref={binaryRef}
          variant="h6"
          sx={{
            fontFamily: "monospace",
            color: "#FFFFFF",
            userSelect: "none",
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            textOverflow: "unset",
            fontSize: "1.4rem",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1rem",
            },
            [theme.breakpoints.down("xs")]: {
              fontSize: "0.9rem",
            },
          }}
        >
          1 1 1 1 1 1 0 1 0 0 1 0 0 0 0 0 0 0 0 1 0 0 1 0 1 0 1 1 0 1 0 0 1 0 0
          1 0 0 1 0 1 0
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BinaryFlickerAnimation;
