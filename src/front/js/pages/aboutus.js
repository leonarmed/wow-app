import React from 'react'
import img from '../../img/fiesta.jpg'
import py from '../../img/python.png'
import sass from '../../img/SASS.png'
import boots from '../../img/Bootstrap_logo.png'
import mui from '../../img/MUI.png'
import html from '../../img/html5.png'
import flask from '../../img/flask.png'
import react from '../../img/react.png'
import flux from '../../img/flux.png'
import cloudinary from '../../img/cloudinary.png'
function AboutUs() {
  return (
<>   
<div className='container-fluid aboutus justify-content-center' style={{backgroundImage: `url(${img})`}}>
  <div className="d-flex container-fluid upperhero" lc-helper="background" >
    .
  </div>
  <div className="container p-5 textbox justify-content-center align-items-center" style={{backgroundColor:"rgb(226 226 226)"}}>
    <div className="row">
      <div className="col-md-4 text-center align-self-center">
        <div className="lc-block border-end border-2 border-dark ">
          <div editable="rich">
            <p className="display-5 text-secondary">POR QUÉ WOW?</p>
          </div>
        </div>
      </div>
      <div className="col-md-8">
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
            <p className="lead text-black">Como tú, siempre hemos buscado el enriquecernos con actividades recreativas y culturales, son necesarias para todos y son parte fundamental de la vida de una persona sana.</p>
            <p className="lead text-black"> Queremos facilitar que esto pase, tanto para quienes hacen los eventos, como para quienes asisten. Vamos a hacer crecer a todos los que formen parte de un evento con Wow, y hacerlos vivir una experiencia inolvidable. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='scrolldown container-fluid mb-5' >
    <div className='display-5 justify-content-center d-flex border-bottom border-warning '>
    Cómo lo hicimos?
    </div>
    <p className='justify-content-center d-flex fs-5 text mt-5 ps-2 pe-2'> Este proyecto fue construido en conjunto por Joel Medina, Juan Araque y Tito Balza. Todos participantes del bootcamp de 4Geeks Venezuela. Queremos llegarle a un público de todas las edades y queremos que volvamos todos a sentirnos confiados de salir a la calle. <br></br><br></br>
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
      <div className='d-flex flex-wrap images justify-content-center'>
        <img src={flux} className='h-5 images'>
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