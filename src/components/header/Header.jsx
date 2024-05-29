import { Box, Typography, Link } from "@mui/material";
import DropdownMenu from "../dropDownMenu/DropdownMenu";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import zoeroLogo from "../../assets/img/zoero-logo.svg";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
        <Link href="/" sx={{ marginTop: 3 }}>
          <img id="logo" src={zoeroLogo} alt="zoero-logo" />
        </Link>
      </Box>

      <Box
        id="nav-container"
        sx={{
          background: "plum",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
          position: "relative",
          width: "15%",
          height: "100%",
          maxHeight: "100%",
          paddingRight: "6vw",
          paddingBottom: 1
          
        }}
      >
        {isMobile && <DropdownMenu />}
        {!isMobile && (
          <Box
          id="links-container"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "end",
              position: "relative",
              width: "100%",
              height: "100%",
              maxHeight: "100%",
              
            }}
          >
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.5
              }}
              component="a"
              href="/#reasoning"
            >
              REASONING
            </Typography>
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.5
              }}
              component="a"
              href="/#experiments"
            >
              EXPERIMENTS
            </Typography>
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.5
              }}
              component="a"
              href="/#coefficients"
            >
              COEFFICIENTS
            </Typography>
            <Typography variant="navLinks" component="a" href="/contact">
              LET’S SOLVE
            </Typography>
          </Box>
        )}
        {/* <Typography
          variant="navLinks"
          sx={{
            marginBottom: 0.5
          }}
          component="a"
          href="/#reasoning"
        >
          REASONING
        </Typography>
        <Typography
          variant="navLinks"
          sx={{
            marginBottom: 0.5
          }}
          component="a"
          href="/#experiments"
        >
          EXPERIMENTS
        </Typography>
        <Typography
          variant="navLinks"
          sx={{
            marginBottom: 0.5
          }}
          component="a"
          href="/#coefficients"
        >
          COEFFICIENTS
        </Typography>
        <Typography variant="navLinks" component="a" href="/contact">
          LET’S SOLVE
        </Typography> */}
      </Box>
    </Box>
  );
};
export default Header;
