import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Logo from "../../../img/WOW.png";
import LoginControllers from "./LoginController";

export default function RightPanelRegister({action}) {
  return (
    <Grid container spacing={2} className="register">
      <Grid item xs={12} display="flex" justifyContent="center">
        <img src={Logo} alt="logo-wow" width="75px" />
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Typography variant="h4" align="center" marginBottom={4}>
          ¿Aún no te has registrado?
        </Typography>
        <Typography variant="h6" align="center">
          ¡Hazlo y encuentra los mejores eventos, descubre nuevas experiencias e
          inicia el mejor viaje de tu vida!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={() => action(true)} variant="contained" color="secondary">
          Registrarse
        </Button>
      </Grid>
    </Grid>
  );
}
