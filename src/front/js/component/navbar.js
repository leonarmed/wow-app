import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/WOW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { Context } from "../store/appContext";
import isEmpty from "is-empty";
import StyledBadge from "./CustomAvatar";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { me } = store;
  const [user, setUser] = useState(me);
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef();
  const [anchorEl, setAnchorEl] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnchorEl(anchorRef?.current), 1);
  }, [anchorRef]);

  useEffect(() => {
    setUser(me);
  }, [me]);

  const onCloseSesion = () => {
    setOpen(!open);
    actions.logout();
  };

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
          {isEmpty(user) ? (
            <Link to="/login">
              <Button variant="contained" color="secondary">
                <FontAwesomeIcon icon={faRightToBracket} />
                Iniciar Sesión
              </Button>
            </Link>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Opciones de usuario">
                <IconButton onClick={() => setOpen(!open)} sx={{ p: 0 }}>
                  <Stack direction="row" spacing={2}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar
                        alt={store.me.name}
                        src={`${store.me.url_image}`}
                      />
                    </StyledBadge>
                  </Stack>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "55px" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setOpen(!open)}
              >
                <MenuItem key="profile" onClick={() => navigate("/myprofile")}>
                  <Typography textAlign="center">Perfil</Typography>
                </MenuItem>
                <MenuItem key="logout" onClick={() => onCloseSesion()}>
                  <Typography textAlign="center">Cerrar sesión</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </div>
      </div>
    </nav>
  );
};
