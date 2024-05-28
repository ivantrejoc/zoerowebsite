import { Box, Typography, Link } from "@mui/material";
import zoeroLogo from "../../assets/img/zoero-logo.svg";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      id="header"
      sx={{
        width: "100%",
        height: "23vh",
        gap: "65%",
        display: "flex",
        overflowX: "hidden",
        marginBottom: "3vh"
      }}
    >
      <Box
        id="logo-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "20%",
          height: "100%",
          maxHeight: "100%"
        }}
      >
        <Link href="/" sx={{marginTop: 3}}>
          <img id="logo" src={zoeroLogo} alt="zoero-logo" />
        </Link>
      </Box>

      <Box
        id="logo-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "end",
          position: "relative",
          width: "15%",
          height: "100%",
          maxHeight: "100%",
          paddingRight: "5vw"
        }}
      >
        <Typography
          variant="navLinks"
          sx={{
            marginBottom: 0.5
          }}
          component="a"
          href="#"
        >
          REASONING
        </Typography>
        <Typography
          variant="navLinks"
          sx={{
            marginBottom: 0.5
          }}
          component="a"
          href="/experiments"
        >
          EXPERIMENTS
        </Typography>
        <Typography
          variant="navLinks"
          sx={{
            marginBottom: 0.5
          }}
          component="a"
          href="#"
        >
          COEFFICIENTS
        </Typography>
        <Typography variant="navLinks" component="a" href="/contact">
          LET’S SOLVE
        </Typography>
      </Box>
    </Box>
  );
};
export default Header;
