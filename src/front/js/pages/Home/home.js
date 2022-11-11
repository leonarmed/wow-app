import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { Add as AddIcon } from "@mui/icons-material";
import "../../../styles/home.scss";
import Header from "../../component/Home/Header";
import Cards from "../../component/Home/Cards/Cards";
import Carousel from "../../component/Carousel";
import isEmpty from "is-empty";
import { Fab, Grid, Typography, Button, Box } from "@mui/material";
import CustomModal from "../../component/CustomModal";
import HomeControllers from "./HomeControllers";
import CustomFormContainer from "../../component/Form/CustomFormContainer";
import CustomInputForm from "../../component/Form/CustomInputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { CustomSkeleton } from "../../component/Skeleton";
import BasicModal from "../../component/ModalMaterial";
import { options } from "../../component/CustomMultiFilter";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const {
    handleSubmitData,
    onSubmit,
    controlInputs,
    errorsData,
    setSelectedImages,
    selectedImages,
    open,
    handleOpen,
    handleClose,
  } = HomeControllers();

  useEffect(async () => {
    actions.getEvents();
  }, []);
  
  let events = [
    {
      id: 1,
      title: "Geohistorical Tour of the Spiritual Capital of Venezuela ",
      address: "Test 1",
      price: "140$",
      description: "Prueba de descripción",
      category: "Tour",
      start_day: "25/10/2022 00:30:00",
      end_day: null,
      geolocation: "https://goo.gl/maps/cqK32jmie4ht5Dvp9",
      ratings: 4,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp_p-n-Ql552fTXjyEEdlNWDlRhSSPLBOyg&usqp=CAU",
    },
    {
      id: 2,
      title: "Concierto de Aterciopelados",
      address: "Test 2",
      price: "80$",
      description: "Pruea de descripcion 2",
      category: "Concierto",
      start_day: "27/10/2022 19:00:00",
      end_day: null,
      geolocation: "https://goo.gl/maps/5NQ5UDL8DRcYVgdG6",
      ratings: 3,
      image_url:
        "https://www.elpais.com.co/files/article_main/uploads/2019/12/15/5df6a3a95a607.png",
    },
    {
      id: 3,
      title: "Concierto de Nelson Arrieta",
      address: "Test 3",
      price: "160$",
      description: "Desripcion 3",
      category: "Concierto",
      start_day: "27/10/2022 19:00:00",
      end_day: null,
      geolocation: "https://goo.gl/maps/KyrppB3CTxiYoesq6",
      ratings: 5,
      image_url:
        "https://w2-noticierovenevision-net.s3.amazonaws.com/public/media/images/nelson-65b53a.jpg",
    },
    {
      id: 4,
      title: "Expo TecnoDigital",
      address: "Test 4",
      price: "50$",
      description: "Descripcion 4",
      category: "Ferias",
      start_day: "28/10/2022 19:00:00",
      end_day: null,
      geolocation: "https://g.page/Hesperia-WTC-Valencia?share",
      rating: 4,
      image_url:
        "https://i0.wp.com/folou.co/wp-content/uploads/2020/06/39705595822_5ee240c176_k-1.jpg?fit=1200%2C675&ssl=1",
    },
    {
      id: 5,
      title: "K-Pop Horror Fest",
      address: "Test 5",
      price: "20$",
      description: "Descripción 5",
      category: "Otros",
      start_day: "30/10/2022 12:00:00",
      end_day: "30/10/2022 17:00:00",
      geolocation: "https://goo.gl/maps/Vaj2SHKJ8oo79s1WA",
      rating: 3,
      image_url:
        "https://cdn-az.allevents.in/events6/banners/22f1efb8a04e0ed16719c583cd68e9e39b15a29da8cd3402f1479645cfb17e67-rimg-w960-h443-gmir.jpg?v=1664062048",
    },
  ];
  const sponsors1 = {
    type: "vip",
    data: [
      {
        id: 1,
        name: "Coca Cola",
        event: "Concierto Urbano",
        detail:
          "Coca-Cola y Ocesa se rifaron con el concierto que acaban de anunciar, si bien hoy en día el género urbano o como hoy en día se le conoce, «reggaetón», es uno de los más escuchados no solo en el país si no a nivel mundial, es por eso que este evento será una auténtica fiesta con algunos de sus máximos exponentes.",
        urlImage:
          "https://wtfonline.mx/wp-content/uploads/2017/10/Coca-Cola-Flow-Fest.jpg",
      },
      {
        id: 2,
        name: "McDonald's",
        event: "Maraton 5k",
        detail:
          "El sábado 15 de octubre a las 17h se llevará a cabo en Puerto Madero la décima edición de McDonald 's M5K, bajo el lema “Mujeres en marcha”. Una prueba exclusiva para mujeres donde deberán correr una distancia competitiva de 5 kilómetros. Ya está abierta la inscripción.",
        urlImage:
          "https://www.totalmedios.com/img/noticias/2022/06/62989677bb998__838x390.jpg",
      },
    ],
  };
  const sponsors2 = {
    type: "normal",
    data: [
      {
        id: 1,
        name: "Visa",
        event: "Viaje para ver un partido de la Fifa World Cup - Catar 2022",
        detail:
          "La pasión por el hermoso deporte une fanáticos del fútbol desde de los rincones del planeta y por ello Visa se enorgullece de ser un socio global de la FIFA World Cup™, tanto en su edición masculina como femenina, desde 2007.",
        urlImage:
          "https://www.visa.com.ar/dam/VCOM/global/about-visa/images/logo-fifa-800x450.jpg",
      },
      {
        id: 2,
        name: "DirecTV Sports",
        event: "Eternos rivales - Caracas Vs Magallanes",
        detail:
          "Los Navegantes del Magallanes y los Leones del Caracas vuelven a jugar este 23 de noviembre de 2022 en la temporada 2022-2023 de la Liga Venezolana de Béisbol Profesional (LVBP)",
        urlImage:
          "https://culturacolectiva-cultura-colectiva-prod.cdn.arcpublishing.com/resizer/pgHKctKp85gMd_tZd_aUMpKW27o=/1024x768/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/PO47IC4WMRBMDN47NOKRP6LIY4.jpg",
      },
    ],
  };

  return (
    <div className="home text-center mt-5 d-block">
      <Header />
      <div className="container-fluid d-flex mb-4">
        <div className="row w-100 m-auto">
          <div className="col-12 col-sm-6">
            <div className="sponsors-container">
              <Carousel data={sponsors1} />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="sponsors-container">
              <Carousel data={sponsors2} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="my-5 text-start">Próximos Eventos</h1>
        <div className="overflow-auto">
          <div className="card-container d-flex">
            {!isEmpty(store.events) ? (
              
              store.events.map((event) => {

                if (isEmpty(store.filter)) {
                  return <Cards key={event.id} data={event} />;
                }
                if (store.filter.includes(event.category)) {
                  
                  return <Cards key={event.id} data={event} />
                }
                //store.filter.includes(event.category) && (<Cards key={event.id} data={event} />)
                //for (let i = 0; i < store.filter.length; i++) {
                //  if (event.category === store.filter[i].title) {
                //    return <Cards key={event.id} data={event} />;
                //  }
                //}
              })
            ) : store.isLoading ? (
              <CustomSkeleton cant={4} />
            ) : (
              <Box>
                <Typography variant="h6">No hay eventos registrados</Typography>
              </Box>
            )}

            {!isEmpty(store.me) && (
              <Fab
                color="secondary"
                aria-label="add"
                sx={{ position: "fixed", right: 20, bottom: 20 }}
                onClick={() => handleOpen()}
              >
                <AddIcon />
              </Fab>
            )}
          </div>
        </div>
      </div>
      <BasicModal open={open} close={handleClose}>
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
                defaultValue={0}
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
      </BasicModal>
    </div>
  );
};
