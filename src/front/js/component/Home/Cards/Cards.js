import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import PlaygroundSpeedDial from "./speedDial";
import imagen from "../../../../img/default_img.jpeg";
import { Context } from "../../../store/appContext";
import isEmpty from "is-empty";

export default function Cards({ data }) {
  const { store, actions } = useContext(Context);
  const { title, image_url, price, ratings, start_day } = data;
  return (
    <div className="card box mb-2 me-3 bg-body rounded">
      <img
        src={image_url ? image_url : imagen}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex align-items-center pb-3">
        <h3 className="card-title m-0">{title}</h3>
        {!isEmpty(store.me) && (
          <button type="button" className="btn favorite-btn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        )}
        <PlaygroundSpeedDial />
      </div>
      <div className="d-flex justify-content-between px-3 align-items-center">
        <h6 className="ms-1">Precio: {price}</h6>
        {!isEmpty(store.me) && (
          <div className="d-flex align-items-center">
            <h6 className="m-0 p-0">{ratings}</h6>
            <FontAwesomeIcon icon={faStar} className="starIcon ms-1" />
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between px-3 pb-3 align-items-center">
        <h6 className="ms-1">Fecha: {start_day}</h6>
      </div>
    </div>
  );
}
