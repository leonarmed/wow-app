import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import LoginControllers from "./LoginController";
import CustomInputForm from "../../component/Form/CustomInputForm";
import CustomFormContainer from "../../component/Form/CustomFormContainer";

export default function LeftPanelRegister() {
  const {
    handleSubmitDataRegister,
    onRegister,
    controlInputsRegister,
    errorsDataRegister,
  } = LoginControllers();

  return (
    <CustomFormContainer
      mode="form"
      onSubmit={handleSubmitDataRegister(onRegister)}
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
            Regístrate
          </Typography>
          <Typography variant="caption" align="left">
            ¡No esperes más y empieza a vivir la vida!
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <CustomInputForm
            size="small"
            name="name"
            control={controlInputsRegister}
            error={errorsDataRegister.name}
            label="Nombre"
          />
        </Grid>
        <Grid item xs={6}>
          <CustomInputForm
            size="small"
            name="last_name"
            control={controlInputsRegister}
            error={errorsDataRegister.last_name}
            label="Apellido"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInputForm
            size="small"
            name="birth_date"
            type="date"
            InputLabelProps={{ shrink: true }}
            control={controlInputsRegister}
            error={errorsDataRegister.birth_date}
            label="Fecha de nacimiento"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInputForm
            size="small"
            name="phone"
            control={controlInputsRegister}
            error={errorsDataRegister.phone}
            label="Teléfono"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInputForm
            size="small"
            name="email"
            type="email"
            control={controlInputsRegister}
            error={errorsDataRegister.email}
            label="Correo electrónico"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInputForm
            size="small"
            name="password"
            type="password"
            control={controlInputsRegister}
            error={errorsDataRegister.password}
            label="Contraseña"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary">
            Registrarme
          </Button>
        </Grid>
      </Grid>
    </CustomFormContainer>
  );
}
