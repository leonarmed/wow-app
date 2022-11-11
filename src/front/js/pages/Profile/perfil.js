import React, { useContext, useState } from "react";
import { Email } from "@mui/icons-material";
import { Grid, Typography, Button, Card } from "@mui/material";
import Cards from "../../component/Home/Cards/Cards";
import { Context } from "../../store/appContext";
import CustomModal from "../../component/CustomModal";
import CustomFormContainer from "../../component/Form/CustomFormContainer";
import ProfileControllers from "./ProfileController";
import CustomInputForm from "../../component/Form/CustomInputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export const Perfil = () => {
  const {
    onSubmit,
    handleSubmitData,
    errorsData,
    controlInputs,
    setSelectedImages,
  } = ProfileControllers();
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-wrap row m-4 p-4 main-container justify-content-around profile-container">
      <Card className="left row align-items-center text-center col-md-4 py-5 justify-content-center container-info">
        <img
          src={
            store.me.url_image
              ? store.me.url_image
              : `https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg`
          }
          className="profile-pic mb-4 p-0"
        />
        <div className="person-info mb-4">
          <h3>{`${store.me.name} ${store.me.last_name}`}</h3>
        </div>
        <div className="other-info row align-items-center justify-content-center px-lg-5 py-3">
          <div className="d-flex information py-3 flex-column">
            <h6 className="m-0 fw-bold">Email: </h6>
            <p className="m-0">{store.me.email}</p>
          </div>
          <div className="d-flex information py-3 flex-column">
            <h6 className="m-0 fw-bold">Fecha nacimiento: </h6>
            <p className="m-0">{store.me.birth_date}</p>
          </div>
          <div className="d-flex information py-3 flex-column">
            <h6 className="m-0 fw-bold">Teléfono: </h6>
            <p className="m-0">{store.me.phone}</p>
          </div>
          <div className="d-flex information py-3 flex-column">
            <h6 className="m-0 fw-bold">Se unió el: </h6>
            <p className="m-0">{store.me.created_at}</p>
          </div>
        </div>
      </Card>

      <div className="col-md-7 p-0 update-info-user">
        <div className="justify-content-center mb-4 h-100">
          <Card className="container-info">
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
                    Actualizar perfil
                  </Typography>
                  <Typography variant="caption" align="left">
                    ¡Esta información no es pública, pero la usaremos para
                    ofrecerte mejores recomendaciones!
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomInputForm
                    size="small"
                    name="phone"
                    control={controlInputs}
                    error={errorsData.phone}
                    label="Teléfono"
                    defaultValue={store.me.phone}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomInputForm
                    size="small"
                    name="password"
                    type="password"
                    control={controlInputs}
                    error={errorsData.password}
                    label="Contraseña"
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="file" className="custom-input-file">
                    <div>
                      <FontAwesomeIcon icon={faCamera} />
                      <div>Cambiar Imagen de perfil</div>
                    </div>
                    <input
                      name="file"
                      id="file"
                      type="file"
                      control={controlInputs}
                      onChange={(e) => setSelectedImages(e.target.files[0])}
                      error={errorsData.url_image}
                    />
                  </label>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="space-around">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    data-bs-dismiss="modal"
                  >
                    Actualizar
                  </Button>
                </Grid>
              </Grid>
            </CustomFormContainer>
          </Card>
        </div>
      </div>
    </div>
  );
};
