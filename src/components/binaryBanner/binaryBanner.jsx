import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { gsap } from "gsap";

const BinaryFlickerAnimation = () => {
  const binarySequence = [
    "0", "1", "0", "1", "0", "0", "1", "1", "1", "0",
    "0", "1", "0", "0", "1", "0", "0", "1", "0", "0",
    "1", "0", "1", "0", "1", "0", "0", "1", "1", "1",
    "0", "0", "1", "0", "0", "1", "0", "1", "0", "1",
    "0", "1", "1", "0", "1", "0", "1", "1", "0", "1",
    "0", "0", "1", "1", "0", "1", "0", "0", "1", "0",
    "1", "0", "1", "0", "1", "1", "0", "1", "0", "1",
    "1", "0", "1", "0", "0", "1", "1", "0", "1", "0",
    "0", "1", "0", "0", "1", "0", "0", "0", "0", "0",
    "0", "0", "0",
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
          { opacity: 1, visibility: "visible", duration: 0.3, ease: "power2.inOut" }
        );
        gsap.to(
          binaryRefs.current.filter((el) => el.textContent === "0"),
          { opacity: 0, visibility: "hidden", duration: 0.3, ease: "power2.inOut" }
        );
      },
      onComplete: () => {
        gsap.to(
          binaryRefs.current.filter((el) => el.textContent === "0"),
          { opacity: 1, visibility: "visible", duration: 0.3, ease: "power2.inOut" }
        );
        gsap.to(
          binaryRefs.current.filter((el) => el.textContent === "1"),
          { opacity: 0, visibility: "hidden", duration: 0.3, ease: "power2.inOut" }
        );
      },
      delay: 1,
    });

    return () => {
      binaryTimeline.kill();
    };
  }, []);

  // Dividir la secuencia binaria en grupos de 36 números por fila y 3 columnas
  const rows = [];
  const numbersPerRow = 3;

  // Llenar cada fila con los números correspondientes
  for (let i = 0; i < binarySequence.length; i += numbersPerRow) {
    const row = binarySequence.slice(i, i + numbersPerRow);
    rows.push(row);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row", // Alineación horizontal de las filas
        background: "#3C3C3C",
        width: "100%", // Ancho máximo del contenedor
        padding: "1rem",
        overflowX: "auto", // Scroll horizontal si el contenido excede el ancho disponible
        marginLeft: "auto", // Centrar el contenedor
        marginRight: "auto", // Centrar el contenedor
      }}
    >
      {/* Mapear cada fila */}
      {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            flexDirection: "column", // Cada fila como columna de dígitos
            alignItems: "center",
            marginX: "0.5rem", // Espacio entre las filas
          }}
        >
          {/* Mapear cada número en la fila */}
          {row.map((digit, index) => (
            <Typography
              key={`${rowIndex}-${index}`}
              ref={(element) => (binaryRefs.current[rowIndex * numbersPerRow + index] = element)}
              variant="h5"
              sx={{
                fontFamily: "monospace",
                color: digit === "0" ? "#FFFFFF" : "#FFFFFF",
                userSelect: "none",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "unset",
                letterSpacing: "0.1em",
                fontSize: "1.2rem",
                opacity: 1,
                visibility: digit === "0" ? "visible" : "hidden",
                margin: "0 0.5rem", // Márgenes izquierdo y derecho para cada dígito
                maxWidth: "2rem", // Ancho máximo para cada dígito
                textAlign: "center", // Alineación central del texto
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
        </Box>
      ))}
    </Box>
  );
};

export default BinaryFlickerAnimation;
