import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import LoginControllers from "./LoginController";
import CustomInputForm from "../../component/Form/CustomInputForm";
import CustomFormContainer from "../../component/Form/CustomFormContainer";

export default function LeftPanel() {
  const { handleSubmitData, onLogin, controlInputs, errorsData } =
    LoginControllers();

  return (
    <CustomFormContainer
      mode="form"
      onSubmit={handleSubmitData(onLogin)}
      style={{ background: "none" }}
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
            Iniciar Sesión
          </Typography>
          <Typography variant="caption" align="left">
            ¡No esperes más y empieza a vivir la vida!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomInputForm
            name="email"
            control={controlInputs}
            error={errorsData.email}
            label="Correo electrónico"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInputForm
            name="password"
            type="password"
            control={controlInputs}
            error={errorsData.password}
            label="Contraseña"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary">
            Iniciar
          </Button>
        </Grid>
      </Grid>
    </CustomFormContainer>
  );
}
