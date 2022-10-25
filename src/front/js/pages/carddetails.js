import React from 'react'
import evento from '../../img/gaitas.png'
function CardDetails() {
  return (
    <div className="container mt-5 rounded" >
      <div className="hero-image rounded">
        <img src={evento}></img>
      <div className="hero-text text-black bg-light rounded">
            <h1 className="display-4">CONCIERTO</h1>
            <p>Gaitazo Zuliano 2022</p>
        </div>
      </div>
    </div>
  )
}
export default CardDetails