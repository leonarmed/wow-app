import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import LoginControllers from "./LoginController";
import CustomInputForm from "../../component/Form/CustomInputForm";
import CustomFormContainer from "../../component/Form/CustomFormContainer";

export default function LeftPanelRegister() {
  const { handleSubmitData, onSendSubmit, controlInputs, errorsData } =
    LoginControllers();

  return (
    <CustomFormContainer
      mode="form"
      onSubmit={handleSubmitData(onSendSubmit)}
      style={{ background: 'none' }}
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
            Iniciar Sesión
          </Typography>
          <Typography variant="caption" align="left">
            ¡No esperes más y empieza a vivir la vida!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomInputForm
            name="user"
            control={controlInputs}
            error={errorsData.user}
            label="Nombre de usuario"
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
