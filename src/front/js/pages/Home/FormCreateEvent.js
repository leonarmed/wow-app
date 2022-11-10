import React from "react";
import CustomFormContainer from "../../component/Form/CustomFormContainer";
import { Grid, Typography, Button } from "@mui/material";
import CustomInputForm from "../../component/Form/CustomInputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import HomeControllers from "./HomeControllers";

export default function FormCreateEvent() {
  const {
    handleSubmitData,
    onSubmit,
    controlInputs,
    errorsData,
    setSelectedImages,
    handleClose,
  } = HomeControllers();
  return (
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
            ¡Como usuario registrado podrás crear y compartir eventos, recuerda
            que queda sujeto a evaluación del equipo de WOW!
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
            control={controlInputs}
            error={errorsData.category}
            label="Categoría"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInputForm
            size="small"
            name="start_day"
            control={controlInputs}
            error={errorsData.start_day}
            label="Fecha de inicio"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInputForm
            size="small"
            name="end_day"
            control={controlInputs}
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
            onClick={() => handleClose()}
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
  );
}
