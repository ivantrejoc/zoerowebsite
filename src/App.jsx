import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./router";
import theme from "./theme";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "./assets/css/_default.css";
import "./assets/css/fonts.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />      
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
