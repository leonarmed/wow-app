import React from "react";

const CustomCard = ({ imgContainer, title, description, buttonContainer }) => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={imgContainer.url}
          className="card-img-top"
          alt={imgContainer.alt}
        />
        <div className="card-body">
          <h5 className="card-title mb-3">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={buttonContainer.url} className="btn btn-primary">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
