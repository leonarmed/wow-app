import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Perfil } from "./pages/perfil";
import LandingPage from "./pages/landingpage";
import injectContext from "./store/appContext";
import CardDetails from "./pages/carddetails";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./pages/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import SimpleBackdrop from "./component/BackdropLoader";
import PublicRoute from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ScrollToTop>
          <SimpleBackdrop />
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<Login />} />
            <Route>
              <Route
                path="/event/:theid"
                element={
                  <PrivateRoute>
                    <CardDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="/myprofile"
                element={
                  <PrivateRoute>
                    <Perfil />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Login />} path="/login" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {window.location.pathname != "/aboutus" && <Footer />}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
