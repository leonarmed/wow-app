import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/WOW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faPlus,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
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
  Grid,
} from "@mui/material";
import { Context } from "../store/appContext";
import isEmpty from "is-empty";
import StyledBadge from "./CustomAvatar";
import { useNavigate } from "react-router-dom";
import BasicModal from "./ModalMaterial";
import CustomFormContainer from "./Form/CustomFormContainer";
import CustomInputForm from "./Form/CustomInputForm";
import HomeControllers from "../pages/Home/HomeControllers";
import { options } from "./CustomMultiFilter";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { me } = store;
  const [user, setUser] = useState(me);
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef();
  const [anchorEl, setAnchorEl] = useState();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const { handleSubmitData, errorsData, controlInputs, onSubmit } =
    HomeControllers();

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
      <div className="container-fluid mx-4">
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
              <Button
                size="small"
                variant="contained"
                color="secondary"
                sx={{ marginRight: 2 }}
                onClick={() => handleOpenModal()}
              >
                <FontAwesomeIcon icon={faPlus} />
                Crea tu evento
              </Button>
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
      <BasicModal open={openModal} close={handleCloseModal}>
        <CustomFormContainer
          mode="form"
          onSubmit={handleSubmitData(onSubmit)}
          style={{ background: "none" }}
          className="register"
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Typography variant="h4" align="left">
                Crear Evento
              </Typography>
              <Typography variant="caption" align="left">
                ¡Como usuario registrado podrás crear y compartir eventos,
                recuerda que queda sujeto a evaluación del equipo de WOW!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputForm
                size="small"
                name="title"
                control={controlInputs}
                error={errorsData.title}
                label="Título"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputForm
                size="small"
                name="address"
                control={controlInputs}
                error={errorsData.address}
                label="Dirección"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputForm
                size="small"
                name="price"
                control={controlInputs}
                error={errorsData.price}
                label="Precio"
                helperText="Precio en Dólares"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputForm
                size="small"
                name="geolocation"
                control={controlInputs}
                error={errorsData.geolocation}
                label="Geolocalización"
                helperText="Usar url de Google Maps"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputForm
                size="small"
                name="description"
                control={controlInputs}
                error={errorsData.description}
                label="Descripción"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputForm
                size="small"
                name="category"
                options={options}
                control={controlInputs}
                error={errorsData.category}
                label="Categoría"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputForm
                size="small"
                name="start_day"
                type="date"
                control={controlInputs}
                InputLabelProps={{ shrink: true }}
                error={errorsData.start_day}
                label="Fecha de inicio"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputForm
                size="small"
                name="end_day"
                type="date"
                control={controlInputs}
                InputLabelProps={{ shrink: true }}
                error={errorsData.end_day}
                label="Fecha fin"
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="file" className="custom-input-file">
                <div>
                  <FontAwesomeIcon icon={faCamera} />
                  <div>Agrega una imagen del evento</div>
                </div>
                <input
                  name="file"
                  id="file"
                  type="file"
                  control={controlInputs}
                  onChange={(e) => setSelectedImages(e.target.files[0])}
                  error={errorsData.file}
                />
              </label>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                color="warning"
                size="small"
                onClick={() => handleCloseModal()}
              >
                Volver
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="small"
                fullWidth
              >
                Crear Evento
              </Button>
            </Grid>
          </Grid>
        </CustomFormContainer>
      </BasicModal>
    </nav>
  );
};
