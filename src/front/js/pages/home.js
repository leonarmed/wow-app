import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Header from "../component/Home/Header";
import Cards from "../component/Home/Cards/Cards";
import Carousel from "../component/Carousel";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const events = [
    {
      id: 1,
      category: "Tour",
      title: "Geohistorical Tour of the Spiritual Capital of Venezuela ",
      startDate: "25/10/2022 00:30:00",
      endDate: null,
      city: "Guanare",
      state: "Portuguesa",
      price: "140$",
      likes: 4,
      geolocation: "https://goo.gl/maps/cqK32jmie4ht5Dvp9",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp_p-n-Ql552fTXjyEEdlNWDlRhSSPLBOyg&usqp=CAU",
    },
    {
      id: 2,
      category: "Concierto",
      title: "Concierto de Aterciopelados",
      startDate: "27/10/2022 19:00:00",
      endDate: null,
      city: "Caracas",
      state: "Miranda",
      price: "80$",
      likes: 3,
      geolocation: "https://goo.gl/maps/5NQ5UDL8DRcYVgdG6",
      urlImage:
        "https://www.elpais.com.co/files/article_main/uploads/2019/12/15/5df6a3a95a607.png",
    },
    {
      id: 3,
      category: "Concierto",
      title: "Concierto de Nelson Arrieta",
      startDate: "27/10/2022 19:00:00",
      endDate: null,
      city: "Caracas",
      state: "Miranda",
      price: "160$",
      likes: 5,
      geolocation: "https://goo.gl/maps/KyrppB3CTxiYoesq6",
      urlImage:
        "https://w2-noticierovenevision-net.s3.amazonaws.com/public/media/images/nelson-65b53a.jpg",
    },
    {
      id: 4,
      category: "Ferias",
      title: "Expo TecnoDigital",
      startDate: "28/10/2022 19:00:00",
      endDate: null,
      city: "Valencia",
      state: "Carabobo",
      price: "50$",
      likes: 4,
      geolocation: "https://g.page/Hesperia-WTC-Valencia?share",
      urlImage:
        "https://i0.wp.com/folou.co/wp-content/uploads/2020/06/39705595822_5ee240c176_k-1.jpg?fit=1200%2C675&ssl=1",
    },
    {
      id: 5,
      category: "Otros",
      title: "K-Pop Horror Fest",
      startDate: "30/10/2022 12:00:00",
      endDate: "30/10/2022 17:00:00",
      city: "Valencia",
      state: "Carabobo",
      price: "20$",
      likes: 3,
      geolocation: "https://goo.gl/maps/Vaj2SHKJ8oo79s1WA",
      urlImage:
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
          "Coca-Cola y Ocesa se rifaron con el concierto que acaban de anunciar, si bien hoy en d??a el g??nero urbano o como hoy en d??a se le conoce, ??reggaet??n??, es uno de los m??s escuchados no solo en el pa??s si no a nivel mundial, es por eso que este evento ser?? una aut??ntica fiesta con algunos de sus m??ximos exponentes.",
        urlImage:
          "https://wtfonline.mx/wp-content/uploads/2017/10/Coca-Cola-Flow-Fest.jpg",
      },
      {
        id: 2,
        name: "McDonald's",
        event: "Maraton 5k",
        detail:
          "El s??bado 15 de octubre a las 17h se llevar?? a cabo en Puerto Madero la d??cima edici??n de McDonald 's M5K, bajo el lema ???Mujeres en marcha???. Una prueba exclusiva para mujeres donde deber??n correr una distancia competitiva de 5 kil??metros. Ya est?? abierta la inscripci??n.",
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
          "La pasi??n por el hermoso deporte une fan??ticos del f??tbol desde de los rincones del planeta y por ello Visa se enorgullece de ser un socio global de la FIFA World Cup???, tanto en su edici??n masculina como femenina, desde 2007.",
        urlImage:
          "https://www.visa.com.ar/dam/VCOM/global/about-visa/images/logo-fifa-800x450.jpg",
      },
      {
        id: 2,
        name: "DirecTV Sports",
        event: "Eternos rivales - Caracas Vs Magallanes",
        detail:
          "Los Navegantes del Magallanes y los Leones del Caracas vuelven a jugar este 23 de noviembre de 2022 en la temporada 2022-2023 de la Liga Venezolana de B??isbol Profesional (LVBP)",
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
        <h3 className="my-4 text-start">Pr??ximos eventos</h3>
        <div className="overflow-auto">
          <div className="card-container d-flex">
            {events.map((event) => {
              return <Cards key={event.id} data={event} />;
            })}
          </div>
        </div>
      </div>

      {/* <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div> */}
    </div>
  );
};
