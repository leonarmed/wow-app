import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Perfil } from "./pages/perfil"
import LandingPage from "./pages/landingpage";
import injectContext from "./store/appContext";
import CardDetails from "./pages/carddetails"
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./pages/Login/Login";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<LandingPage />} path="/aboutus" />
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Login />} path="/login" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<CardDetails />} path="/event/:theid" />
            <Route element={<Perfil />} path="/myprofile" />
          </Routes>
          {window.location.pathname != "/aboutus" && <Footer />}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
