import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import zoeroLogo from "../../assets/img/zoero-logo.svg";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      id="footer-container"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "40vh",
        overflowX: "hidden",
        marginBottom: "0",
        [theme.breakpoints.down("md")]: {
          height: "90vh"
        },
        [theme.breakpoints.down("sm")]: {
          height: "61vh"
        }
      }}
    >
      <Box
        id="footer-items-container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          position: "relative",
          width: "84vw",
          height: "100%",
          margin: "0 8vw 0 8vw",
          borderTop: "1px solid #FFF",
          paddingTop: 3,
          gap: "39.6%",
          [theme.breakpoints.down("xxl")]: {
            gap: "26.8%",
            paddingBottom: 2
          },
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            paddingTop: 0,
            paddingBottom: 0,
            gap: 2
          }
        }}
      >
        <Box
          id="left-items"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            width: "30%",
            height: "100%",
            maxHeight: "100%",
            [theme.breakpoints.down("xxl")]: {
              width: "32.5%"
            },
            [theme.breakpoints.down("md")]: {
              width: "100%",
              height: "50%"
            },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "52%",
              marginTop: 2
            }
          }}
        >
          <Box
            id="logo-container"
            sx={{
              [theme.breakpoints.down("xxl")]: {
                marginTop: 2
              },
              [theme.breakpoints.down("md")]: {
                width: "33%",
                marginTop: 2
              }
            }}
          >
            <img id="logo-footer" src={zoeroLogo} alt="zoero-logo" />
          </Box>
          <Box
            id="credits-container"
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "100%"
              }
            }}
          >
            <p className="rights">
              © Zoero Labs LTD. <br></br>
              All Rights Reserved 2024.
            </p>
            <p id="solvedText">
              Solved by <span className="highlight">@Omar</span> and{" "}
              <span className="highlight">@Zakaria</span>
            </p>
          </Box>
        </Box>
        <Box
          id="right-items"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: "5rem",
            marginTop: 6,
            [theme.breakpoints.down("xxl")]: {
              gap: "5rem"
            },
            [theme.breakpoints.down("md")]: {
              marginTop: 0
            },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              gap: "1rem",
              justifyContent: "start"
            }
          }}
        >
          <Box
            id="nav-1"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              [theme.breakpoints.down("xxl")]: {
                gap: "1rem"
              },
              [theme.breakpoints.down("sm")]: {
                width: "40%"
              }
            }}
          >
            <a className="footerLinks" href="#">
              The Science
            </a>
            <a className="footerLinks" href="#">
              Millenniums
            </a>
            <a className="footerLinks" href="/#coefficients">
              Coefficients
            </a>
          </Box>
          <Box
            id="nav-2"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              [theme.breakpoints.down("xxl")]: {
                gap: "1rem"
              },
              [theme.breakpoints.down("sm")]: {
                width: "60%"
              }
            }}
          >
            <a className="footerLinks" href="#">
              Knowledge
            </a>
            <a className="footerLinks" href="/terms">
              Terms & Policies
            </a>
            <a className="footerLinks" href="/contact">
              Contact us
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
