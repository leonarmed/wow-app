import React from 'react'
import img from "../../img/nelson-arrieta-estereo-marketing.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";



function CardDetails() 
{
  return (
<div className='container'>
      <div className="pt-5 text-center bg-image rounded-3 col-12 containerimage" style={{backgroundImage: `url(${img})`}}>
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
      <div className='d-flex justify-content-between gap-3 align-items-center barrasubimagen rounded'>  
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
          <button type="button" className="btn favorite-btn ps-5 pe-5 ">
                <FontAwesomeIcon icon={faHeart}/>
          </button>
        <div className="d-flex align-items-center">
              <h6 className="m-0 p-0">4 </h6>
              <FontAwesomeIcon icon={faStar} className="starIcon ms-1" />
        </div>
      </div>
      <div className='row d-flex justify-content-between'>
        <div>
        <h2 className='mt-2'>SINOPSIS</h2>
    El afamado cantautor venezolano, Nelson Arrieta, regresa a VENEZUELA, con una gira por varias ciudades en la que incluye Maracaibo,  Arrieta, también conocido como “Pichón”, vuelve a Venezuela consolidado como uno de los artistas más importantes del género tropical y con varios éxitos como “Besas tan bien”, “Solo por ti”, “Baila Pegado Conmigo” y “Hasta Cuándo Tú”, que alcanzaron los primeros lugares en la radio en Venezuela.
  La trayectoria musical de uno de los principales exponentes de la música latina tiene una huella marcada por su extraordinaria voz.  Su carrera como solista es avalada por casi dos décadas como una de las principales voces de Guaco, la súper banda de Venezuela, con emblemáticos temas como “Todo quedo”, “Zapatero” y “Regálame tu Amor” y muchos otros. Un abanico de canciones que podrán ser disfrutadas en este concierto que promete ser una experiencia musical inolvidable y que servirá para recordar los grandes momentos que le ha traído este artista a Venezuela.
      </div>
        <div>
          <h2> TABLA DE PRECIOS </h2>
          <table class="mb-3">
				  <tbody>
				
				  <tr>
								<td class="px-2">GOLD:</td>
					<td class="text-right">
						BsS 810,00
					</td>
				  </tr>
				
				  <tr>
					<td class="px-2">PLATINUM:</td>
					<td class="text-right">
						BsS 1.080,00
					</td>
				  </tr>
				
				  <tr>
									<td class="px-2">DIAMANTE:</td>
					<td class="text-right">
						BsS 1.350,00
					</td>
				  </tr>
				
				</tbody>
			</table>
        </div>
      </div>
      <section className='formcomments justify-content-start'>
  <div class="container my-5 py-5 text-dark">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-6">
        <div class="card">
          <div class="card-body p-4">
            <div class="d-flex flex-start w-100">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="65"
                height="65" />
              <div class="w-100">
                <h5>Add a comment</h5>
                <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
                <div class="form-outline">
                  <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                  <label class="form-label" for="textAreaExample">What is your view?</label>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <button type="button" class="btn btn-danger">
                    Send <i class="fas fa-long-arrow-alt-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  
  )
}
export default CardDetails