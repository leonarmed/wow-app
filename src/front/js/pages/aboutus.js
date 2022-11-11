import React from 'react'
import img from '../../img/fiesta.jpg'
import py from '../../img/python.png'
import sass from '../../img/SASS.png'
import boots from '../../img/Bootstrap_logo.png'
import mui from '../../img/MUI.png'
import html from '../../img/html5.png'
import flask from '../../img/flask.png'
import react from '../../img/react.png'
import flux from '../../img/fluxx.png'
import cloudinary from '../../img/cloudinary.png'
import joel from '../../img/joel.jpeg'
import tito from '../../img/tito.jpeg'
import juan from '../../img/juan.jpeg'
function AboutUs() {
  return (
<>   
<div className='container-fluid aboutus justify-content-center pb-5' style={{backgroundImage: `url(${img})`}}>
  <div className="d-flex container-fluid upperhero" lc-helper="background" >
    .
  </div>
  <div className="container p-3 py-5 textbox justify-content-center align-items-center">
    <div className="row">
      <div className="col-md-4 text-center align-self-center">
        <div className="lc-block border-end border-2 border-dark ">
          <div editable="rich">
            <p className="display-3 text-secondary">¿POR QUÉ WOW?</p>
          </div>
        </div>
      </div>
      <div className="col-md-8 row align-items-center">
        <div className="lc-block ">
          <div editable="rich">
            <p className="display-5">Impulsando los eventos para todos</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-9 offset-md-1">
        <div className="lc-block mt-5">
          <div editable="rich">
            <p className="lead text-black fs-3">Como tú, siempre hemos buscado el enriquecernos con actividades recreativas y culturales, son necesarias para todos y son parte fundamental de la vida de una persona sana.</p>
            <p className="lead text-black fs-3"> Queremos facilitar que esto pase, tanto para quienes hacen los eventos, como para quienes asisten. Vamos a hacer crecer a todos los que formen parte de un evento con Wow, y hacerlos vivir una experiencia inolvidable. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='scrolldown1 container-fluid py-5' >
  <div className='display-3 justify-content-center d-flex border-bottom border-warning pb-5'>
    Los Programadores
    
  </div>
  <div className='d-flex flex-wrap justify-content-around mt-5'>
    <div className='d-flex flex-wrap images-per-con mb-3 justify-content-center'>
      <img src={juan} className='h-5 images-person mb-3 juan'>
      </img>
      <h3>Juan Araque</h3>
      <h5 className='text-center d-flex'>Estudiante de ingeniería en sistemas, 19 años.</h5>
      
    </div>
    <div className='d-flex flex-wrap images-per-con mb-3 justify-content-center'>
      <img src={joel} className='h-5 images-person mb-3 joel'>
      </img>
      <h3>Joel Leonardo Medina</h3>
      <h5 className='text-center d-flex'>Ingeniero en sistemas, front end developer, 34 años.</h5>
    </div>
    <div className='d-flex flex-wrap images-per-con mb-3 justify-content-center'>
      <img src={tito} className='h-5 images-person tito mb-3'>
      </img>
      <h3>Tito Ángel Balza</h3>
      <h5 className='text-center d-flex'>Estudiante de economía empresarial, 19 años.</h5>
    </div>
  </div>
</div>
<div className='scrolldown2 container-fluid py-5' >
    <div className='display-3 justify-content-center d-flex border-bottom border-warning pb-5'>
    ¿Cómo lo hicimos?
    </div>
    <p className='justify-content-center d-flex fs-4 text mt-2 ps-2 pe-2 pt-3'> 
    Para hacer esta página usamos distintos lenguajes de programación y/o librerías:
    </p>
    <div className='d-flex flex-wrap justify-content-around mt-5'>
      <div className='d-flex flex-wrap images justify-content-center'>
        <img src={html} className='h-5 images'>
        </img>
        <p className='text d-flex align-items-end '>HTML5</p>
      </div>
      <div className='d-flex flex-wrap images justify-content-center pt-4 '>
        <img src={sass} className='h-5 images'>
        </img>
        <p className='text d-flex align-items-end '>Sass</p>
      </div>
      <div className='d-flex flex-wrap images justify-content-center'>
        <img src={py} className='h-5 images'>
        </img>
        <p className='text d-flex align-items-end '>Python</p>
      </div>
      <div className='d-flex flex-wrap images justify-content-center'>
        <img src={react} className='h-5 images'>
        </img>
        <p className='text d-flex align-items-end '>React</p>
      </div>
    </div>
    <div className='d-flex flex-wrap justify-content-around mt-5'>
      <div className='d-flex flex-wrap images justify-content-center'>
        <img src={boots} className='h-5 images'>
        </img>
        <p className='text d-flex align-items-end '>Bootstrap</p>
      </div>
      
      <div className='d-flex flex-wrap images justify-content-center'>
        <img src={mui} className='h-5 images'>
        </img>
        <p className='text d-flex align-items-end '>Material UI</p>
      </div>
      <div className='d-flex flex-wrap images justify-content-center'>
        <img src={flask} className='h-5 images'>
        </img>
        <p className='text d-flex align-items-end '>Flask</p>
      </div>
      <div className='d-flex flex-wrap images justify-content-center '>
        <img src={flux} className='h-5 images flux'>
        </img>
        <p className='text d-flex align-items-end '>Flux</p>
      </div>
      <div className='d-flex flex-wrap images justify-content-center pt-5'>
        <img src={cloudinary} className='h-5 images'>
        </img>
        <p className='text d-flex align-items-end '>Cloudinary</p>
      </div>
    </div>
</div>
</>
  )
}

export default AboutUs