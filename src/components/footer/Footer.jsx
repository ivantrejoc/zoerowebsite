import { Box } from "@mui/material";
import zoeroLogo from "../../assets/img/zoero-logo.svg";
const Footer = () => {
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
        marginBottom: "0"
      }}
    >
      <Box
        id="footer-items-container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          width: "84vw",
          height: "100%",
          margin: "0 8vw 0 8vw"
        }}
      >
        <div id="left-items">
          <div id="logo-container">
            <img id="logo-footer" src={zoeroLogo} alt="zoero-logo" />
          </div>
          <p className="rights">
            © Zoero Labs LTD. <br></br>
            All Rights Reserved 2024.
          </p>
          <p id="solvedText">
            Solved by <span className="highlight">@Omar</span> and{" "}
            <span className="highlight">@Zakaria</span>
          </p>
        </div>
        <div id="right-items">
          <div id="nav-1">
            <a className="footerLinks" href="#">
              The Science
            </a>
            <a className="footerLinks" href="#">
              Millenniums
            </a>
            <a className="footerLinks" href="#">
              Coefficients
            </a>
          </div>
          <div id="nav-2">
            <a className="footerLinks" href="#">
              Knowledge
            </a>
            <a className="footerLinks" href="#">
              Terms & Policies
            </a>
            <a className="footerLinks" href="#">
              Contact us
            </a>
          </div>
        </div>
      </Box>
    </Box>
  );
};
export default Footer;
