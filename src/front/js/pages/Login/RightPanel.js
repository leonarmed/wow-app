import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Logo from "../../../img/WOW.png";
import LoginControllers from "./LoginController";

export default function LeftPanel() {
  const { handleSubmitData, onSendSubmit, controlInputs, errorsData } =
    LoginControllers();

  return (
    <form action={handleSubmitData(onSendSubmit)} className="m-2 p-2">
      <Grid container spacing={2}>
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
            ¡Hazlo y encuentra los mejores eventos, descubre nuevas experiencias
            e inicia el mejor viaje de tu vida!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary">
            Registrarse
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
