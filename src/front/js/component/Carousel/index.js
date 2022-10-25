import React from 'react'

export default function Carousel({data}) {
    const sponsor = data.data
  return (
    <div id={`sponsors-wow-${data.type}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {sponsor.map((sponsor, i) => {
                return <button type="button" key={sponsor.id} data-bs-target={`sponsors-wow-${data.type}`} data-bs-slide-to={i} className={sponsor.id === 1 ? 'active' : "" } aria-current="true" aria-label={sponsor.name}></button>
            })}
        </div>
        <div className="carousel-inner shadow">
            {sponsor.map((sponsor) => {
                return (
                    <div key={sponsor.id} className={`carousel-item ${sponsor.id === 1 ? 'active' : ''}`}>
                        <div className="shadow"></div>
                        <img src={sponsor.urlImage} className="d-block w-100" alt={sponsor.name} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{`${sponsor.name} - ${sponsor.event}`}</h5>
                            <p>{sponsor.detail}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`sponsors-wow-${data.type}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`sponsors-wow-${data.type}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
    </div>
  )
}
