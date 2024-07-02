import { useEffect, useRef } from "react";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { gsap } from "gsap";

const BinaryFlickerAnimation = () => {
  const binarySequence = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "0",
    "0",
    "1",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "1",
    "0",
    "0",
    "1",
    "0",
    "1",
    "0",
    "1",
    "1",
    "0",
    "1",
    "0",
    "0",
    "1",
    "0",
    "0",
    "1",
    "1",
    "0",
    "0",
    "1",
    "0",
    "0",
    "0",
    "1",
    "1",
    "0",
    "1",
    "1",
  ];

  const theme = useTheme();
  const binaryRefs = useRef([]);

  useEffect(() => {
    const binaryTimeline = gsap.timeline({ repeat: -1 });

    binaryTimeline.to(binaryRefs.current, {
      duration: 0.5,
      onStart: () => {
        gsap.to(
          binaryRefs.current.filter((el) => el.textContent === "1"),
          { opacity: 1, duration: 0.5 }
        );
        gsap.to(
          binaryRefs.current.filter((el) => el.textContent === "0"),
          { opacity: 0, duration: 0.5 }
        );
      },
      onComplete: () => {
        gsap.to(
          binaryRefs.current.filter((el) => el.textContent === "0"),
          { opacity: 1, duration: 0.5 }
        );
        gsap.to(
          binaryRefs.current.filter((el) => el.textContent === "1"),
          { opacity: 0, duration: 0.5 }
        );
      },
      delay: 1,
    });

    return () => {
      binaryTimeline.kill();
    };
  }, []);

  // Dividir la secuencia binaria en grupos de 6 números por fila
  const rows = [];
  for (let i = 0; i < binarySequence.length; i += 8) {
    const row = binarySequence.slice(i, i + 6);
    rows.push(row);
  }

  return (
    <Card
      sx={{
        width: "85%",
        height: "auto",
        margin: "auto",
        background: "#3C3C3C",
        [theme.breakpoints.down("sm")]: {
          maxWidth: 300,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        {/* Renderizar cada fila */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((digit, columnIndex) => (
              <Typography
                key={`${rowIndex}-${columnIndex}`}
                ref={(element) =>
                  (binaryRefs.current[rowIndex * 6 + columnIndex] = element)
                }
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  color: digit === "0" ? "#FFFFFF" : "#FFFFFF",
                  userSelect: "none",
                  whiteSpace: "pre-wrap",
                  overflow: "hidden",
                  textOverflow: "unset",
                  fontSize: "1.4rem",
                  margin: "0.2rem", // Espacio entre los números
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "0.9rem",
                  },
                }}
              >
                {digit}
              </Typography>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default BinaryFlickerAnimation;
