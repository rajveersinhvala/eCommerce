import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Contact from "./Contact";
import Error from "./Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29, 29, 29, 0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#f7f7f7",
      footer_bg: "#022f40",
      btn: "rgb(51 117 199, 0.86)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
