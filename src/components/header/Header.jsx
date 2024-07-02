import {useEffect} from "react";
import { Box, Typography, Link } from "@mui/material";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import zoeroLogo from "../../assets/img/zoero-logo.svg";
import { gsap } from 'gsap';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const logo = document.getElementById('logo');

    logo.addEventListener('mouseenter', () => {
      gsap.to(logo, { scale: 1.2, duration: 0.3, ease: "power1.out" });
    });

    logo.addEventListener('mouseleave', () => {
      gsap.to(logo, { scale: 1, duration: 0.3, ease: "power1.out" });
    });

    return () => {
      logo.removeEventListener('mouseenter', () => {
        gsap.to(logo, { scale: 1.2, duration: 0.3, ease: "power1.out" });
      });
      logo.removeEventListener('mouseleave', () => {
        gsap.to(logo, { scale: 1, duration: 0.3, ease: "power1.out" });
      });
    };
  }, []);
  return (
    <Box
      id="header"
      sx={{
        width: "100%",
        height: "23vh",
        gap: "65%",
        display: "flex",
        overflowX: "hidden",
        marginBottom: "3vh",
        [theme.breakpoints.down("md")]: {
          gap: "65%"
        },
        [theme.breakpoints.down("sm")]: {
          gap: "50%"
        }
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
          maxHeight: "100%",
          ['@media (max-width: 1920px)']: {
            paddingLeft: "5vw",
            paddingBottom: 4
          },
          ['@media (max-width: 960px)']: {
            width: "35%",
            paddingLeft: 10
          }
        }}
      >
        <Link href="/" sx={{ marginTop: 3 }}>
          <img id="logo" src={zoeroLogo} alt="zoero-logo" />
        </Link>
      </Box>

      <Box
        id="nav-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
          position: "relative",
          width: "15%",
          height: "100%",
          maxHeight: "100%",
          paddingRight: "6vw",
          [theme.breakpoints.down("xxl")]: {
            width: "18%",
            paddingRight: "5vw"
          }
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
              maxHeight: "100%"
            }}
          >
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.5,
                "&:hover":{
                  color: "#FFFFFF"
                }
              }}
              component="a"
              href="/#reasoning"
            >
              REASONING
            </Typography>
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.5,
                "&:hover":{
                  color: "#FFFFFF"
                }
              }}
              component="a"
              href="/#experiments"
            >
              EXPERIMENTS
            </Typography>
            <Typography
              variant="navLinks"
              sx={{
                marginBottom: 0.5,
                "&:hover":{
                  color: "#FFFFFF" 
                }
              }}
              component="a"
              href="/#coefficients"
            >
              COEFFICIENTS
            </Typography>
            <Typography variant="navLinks" component="a" href="/contact"
            sx={{              
              "&:hover":{
                color: "#FFFFFF" 
              }
            }}
            >
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
