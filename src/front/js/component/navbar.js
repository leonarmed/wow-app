import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/WOW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { Context } from "../store/appContext";
import isEmpty from "is-empty";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { me } = store;
  const [user, setUser] = useState(me);
  useEffect(() => {
    setUser(me);
  }, [me]);
  console.log(user, "navbar///");
  return (
    <nav className="navbar navbar-dark">
      <div className="container">
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
          <Link to="/login">
            {isEmpty(user) ? (
              <Button type="submit" variant="contained" color="secondary">
                <FontAwesomeIcon icon={faRightToBracket} />
                Iniciar Sesión
              </Button>
            ) : (
              <Button variant="contained" color="secondary">
                <FontAwesomeIcon icon={faRightToBracket} />
                Cerrar Sesión
              </Button>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
