import React, { useContext, useState } from "react";
import { Email } from "@mui/icons-material";
import { Grid, Typography, Button } from "@mui/material";
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
    <div className="d-flex flex-wrap row m-4 p-4 main-container justify-content-around align-items-center">
      <div className="left row align-items-center text-center col-md-4 py-5 mb-4 justify-content-center">
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
          <div className="d-flex align-items-center justify-content-between information py-3 flex-column ">
            <h6 className="m-0 fw-bold">Email: </h6>
            <p className="m-0">{store.me.email}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between information py-3 flex-column ">
            <h6 className="m-0 fw-bold">Fecha nacimiento: </h6>
            <p className="m-0">{store.me.birth_date}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between information py-3 flex-column ">
            <h6 className="m-0 fw-bold">Teléfono: </h6>
            <p className="m-0">{store.me.phone}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between information py-3 flex-column ">
            <h6 className="m-0 fw-bold">Se unió el: </h6>
            <p className="m-0">{store.me.created_at}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between information py-3 flex-column ">
            <h6 className="m-0 fw-bold">Rol: </h6>
            <p className="m-0">{store.me.rol}</p>
          </div>
        </div>

        <Button
          type="button"
          className="mt-4"
          variant="contained"
          color="secondary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Editar información
        </Button>
      </div>

      <div className="col-md-7 p-0">
        <div className="card-favoritos align-items-center justify-content-center mb-4">
          <div className="card-header">
            <h3 className="m-0">Favoritos</h3>
          </div>
          <div className="overflow-auto">
            <div className="card-container d-flex">
              <Cards
                data={{
                  id: 1,
                  category: "Tour",
                  title:
                    "Geohistorical Tour of the Spiritual Capital of Venezuela ",
                  start_day: "25/10/2022 00:30:00",
                  end_day: null,
                  city: "Guanare",
                  state: "Portuguesa",
                  price: "140$",
                  likes: 4,
                  geolocation: "https://goo.gl/maps/cqK32jmie4ht5Dvp9",
                  urlImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp_p-n-Ql552fTXjyEEdlNWDlRhSSPLBOyg&usqp=CAU",
                }}
              />
            </div>
          </div>
        </div>

        <div className="card-favoritos">
          <div className="card-header">
            <h3 className="m-0">Asistencias</h3>
          </div>

          <div className="overflow-auto">
            <div className="card-container d-flex">
              <Cards
                data={{
                  id: 1,
                  category: "Tour",
                  title:
                    "Geohistorical Tour of the Spiritual Capital of Venezuela ",
                  start_day: "25/10/2022 00:30:00",
                  end_day: null,
                  city: "Guanare",
                  state: "Portuguesa",
                  price: "140$",
                  likes: 4,
                  geolocation: "https://goo.gl/maps/cqK32jmie4ht5Dvp9",
                  urlImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp_p-n-Ql552fTXjyEEdlNWDlRhSSPLBOyg&usqp=CAU",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <CustomModal>
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
                ¡Esta información no es pública, pero la usaremos para ofrecerte
                mejores recomendaciones!
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
              <label for="file" className="custom-input-file">
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
                variant="outlined"
                color="warning"
                data-bs-dismiss="modal"
              >
                Volver
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                data-bs-dismiss="modal"
              >
                Registrarme
              </Button>
            </Grid>
          </Grid>
        </CustomFormContainer>
      </CustomModal>
    </div>
  );
};
