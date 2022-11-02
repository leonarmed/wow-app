import React, { useState } from 'react'
import img from "../../img/nelson-arrieta-estereo-marketing.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function CardDetails() 
{
  
  const [comment, setComment] =useState("");
  const [comments, setComments] = useState([]);
  const onClickHandler = () => {
    setComments((comments) => [...comments, comment])
  };
  const onChangeHandler = (e) => {
    setComment (e.target.value);
  };
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    
<div className='fondo container-fluid'>
    <div className='hero'>
      <div className="pt-5 text-center bg-image rounded-3 col-12 containerimage container-fluid" style={{backgroundImage: `url(${img})`}}>
        <div className="ola pb-3 pt-3">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">NELSON ARRIETA</h1>
              <h4 className="mb-3">CONCIERTO</h4>
              <a className="btn btn-outline-light btn-lg" href="#!" role="button">Marca tu asistencia</a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div className=' container-fluid d-flex justify-content-between gap-3 align-items-center flex-wrap flex-md-nowrap barrasubimagen rounded'>  
        <div class="d-flex-column align-self-center px-3 py-2 FECHA rounded">
          <p class="day font-weight-bold my-0">04</p>
          <p class="month text-uppercase my-0">Nov</p>
        </div>
        <div className='d-flex align-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo-alt-fill mb-1" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
          </svg>
          <h3 className='mt-1'>Salón Caroní Tibisay Hotel del Lago</h3>
        </div>
        <div className='d-flex align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className='bi bi-clock pe-1' viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            <h3 className='mt-1'>8:00 PM</h3>
        </div>
          <button type="button" className="btn favorite-btn ps-5 pe-5  ">
                <FontAwesomeIcon icon={faHeart}/>
          </button>
        <div className="d-flex align-items-center">
              <h6 className="m-0 p-0">4 </h6>
              <FontAwesomeIcon icon={faStar} className="starIcon ms-1" />
        </div>
      </div>
    </div>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 row pt-3">
      <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5  text-center text-white overflow-hidden col-md-6 rounded partenegra">
        <div class="my-3 py-3">
          <h2 class="display-5">SINOPSIS</h2>
          <p class="lead">El afamado cantautor venezolano, Nelson Arrieta, regresa a VENEZUELA, con una gira por varias ciudades en la que incluye Maracaibo,  Arrieta, también conocido como “Pichón”, vuelve a Venezuela consolidado como uno de los artistas más importantes del género tropical y con varios éxitos como “Besas tan bien”, “Solo por ti”, “Baila Pegado Conmigo” y “Hasta Cuándo Tú”, que alcanzaron los primeros lugares en la radio en Venezuela.

La trayectoria musical de uno de los principales exponentes de la música latina tiene una huella marcada por su extraordinaria voz.  Su carrera como solista es avalada por casi dos décadas como una de las principales voces de Guaco, la súper banda de Venezuela, con emblemáticos temas como “Todo quedo”, “Zapatero” y “Regálame tu Amor” y muchos otros. Un abanico de canciones que podrán ser disfrutadas en este concierto que promete ser una experiencia musical inolvidable y que servirá para recordar los grandes momentos que le ha traído este artista a Venezuela.

 </p>
        </div>
        <div class="bg-light box-shadow mx-auto rounded "></div>
      </div>
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-6 rounded">
        <div class="my-3 p-3">
          <h2 class="display-5 text-uppercase">Dirección y Precios</h2>
          <p class="lead">GOLD:	BsS 810,00
          <br></br>
PLATINUM:	BsS 1.080,00
<br></br>
DIAMANTE:	BsS 1.350,00
<br></br>
</p>
<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=salon%20caroni%20tibisay%20el%20hotel%20del%20lago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br></br><a href="https://www.embedgooglemap.net">wordpress add google map</a></div></div>
        </div>
        <div class="bg-dark box-shadow mx-auto rounded "></div>
      </div>
    </div>
      <section className='formcomments justify-content-center gap-5 d-flex pt-5 flex-wrap'>
        <div class="card">
          <div class="card-body p-4">
            <div class="d-flex flex-start w-100">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="65"
                height="65" />
              <div class="w-100">
                <h5>Add a comment</h5>
                <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
                <div class="form-outline">
                  <textarea class="form-control" id="textAreaExample" rows="4" 
                  value={comment}
                  onChange={onChangeHandler}>
                  </textarea>
                  <label class="form-label" for="textAreaExample">What is your view?</label>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <button onClick={onClickHandler}>
                    Send <i class="fas fa-long-arrow-alt-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
      </div>
  </div>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">COMENTARIOS</h5>
    <p class="card-text ">
      <div class="card mb-4 w-100">
          <div class="card-body">
            <p>{comments.map((text) => ( <div> {text}</div>))}</p>
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <p class="small mb-0 ms-2">Martha</p>
              </div>
              <div class="d-flex flex-row align-items-center">
                <p class="small text-muted mb-0">Upvote?</p>
                <i class="far fa-thumbs-up mx-2 fa-xs text-black"></i>
                <p class="small text-muted mb-0">3</p>
              </div>
            </div>
          </div>
        </div></p>
  </div>
</div>
</section>
</div>

  )
}
export default CardDetails