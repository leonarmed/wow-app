import React from "react";
import CustomCard from "../component/LandingPage/CustomCard/index.js";

//include images into your bundle
import Jumbotron from "../component/LandingPage/Jumbotron/index.js";
import Ideas from "../component/LandingPage/Ideas/index.js";
import Members from "../component/LandingPage/Members/index.js";
import ProjectScope from "../component/LandingPage/ProjectScope/index.js";
import Technology from "../component/LandingPage/Technology/index.js";

const description =
  "Lorem ipsum odor amet, consectetuer adipiscing elit. Sit malesuada vestibulum mollis sem faucibus tempor tortor aliquet? Venenatis ac nisl etiam ultricies natoque pharetra ipsum lorem. Elit facilisi elementum enim pharetra eros. Pulvinar dignissim pretium torquent urna erat curabitur diam metus. Ornare magnis eros aliquet ad congue dictumst tortor elementum sodales.";

const cards = [
  {
    imgContainer: {
      url: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_c8d202cc16cf4b079ffd88860a0c0866.jpg",
      alt: "",
    },
    title: "Viaje 1",
    description: description,
    buttonContainer: {
      url: "www.google.com",
    },
  },
  {
    imgContainer: {
      url: "https://chevrolet.delasobera.com.py/images/products/s10/chevrolet-s10-cabina-doble-pick-up-exterior.webp",
      alt: "Segundo viaje",
    },
    title: "Viaje 2",
    description: description,
    buttonContainer: {
      url: "www.google.com",
    },
  },
  {
    imgContainer: {
      url: "https://paraguaysobreruedas.com/wp-content/uploads/2021/01/Capa-Nueva-Chevrolet-S10.jpg",
      alt: "Tercer viaje",
    },
    title: "Viaje 3",
    description: description,
    buttonContainer: {
      url: "www.google.com",
    },
  },
  {
    imgContainer: {
      url: "https://www.megautos.com/wp-content/uploads/2021/10/Chevrolet-S10-Z71-delantera.jpg",
      alt: "Cuarto viaje",
    },
    title: "Viaje 4",
    description: description,
    buttonContainer: {
      url: "www.google.com",
    },
  },
  {
    imgContainer: {
      url: "https://www.clarin.com/img/2022/05/19/chevrolet-s10-z71-la-nueva___p8nj-P-pn_2000x1500__1.jpg",
      alt: "Quinto viaje",
    },
    title: "Viaje 5",
    description: description,
    buttonContainer: {
      url: "www.google.com",
    },
  },
  {
    imgContainer: {
      url: "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/pickups-and-trucks/2022-s10-z71/mov/01-images/acessorios-desk.jpg?imwidth=960",
      alt: "Sexto viaje",
    },
    title: "Viaje 6",
    description: description,
    buttonContainer: {
      url: "www.google.com",
    },
  },
];
//create your first component
const LandingPage = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  return (
    <div>
      <Ideas />
      <Members />
      <ProjectScope />
      <Technology />
      <div className="container-md p-2">
        <members />
        <Jumbotron />
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 m-auto">
          {cards.map((card, i) => {
            return (
              <CustomCard
                key={i}
                imgContainer={card.imgContainer}
                title={card.title}
                description={card.description}
                buttonContainer={card.buttonContainer}
              />
            );
          })}
        </div>
      </div>
      <div className="footer w-100 bg-dark text-white d-flex justify-content-center align-items-center fs-6 fw-light">
        Copyright Reserved - Travels PY {year}
      </div>
    </div>
  );
};

export default LandingPage;
