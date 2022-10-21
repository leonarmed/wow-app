import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/WOW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark">
      <div className="container navbar">
        <div className="left-content">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">Inicio</span>
          </Link>
          <Link to="/aboutus">
            <span className="navbar-brand mb-0 h1">¿Qué es WOW?</span>
          </Link>
        </div>
        <div className="d-flex">
          <img src={logo} alt="logo-wow" width="70px" className="p-2" />
          <div className="title">OW!</div>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faRightToBracket} />
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
