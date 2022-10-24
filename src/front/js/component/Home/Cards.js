import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import PlaygroundSpeedDial from "../Home/speedDial";
import imagen from "../../../img/default_img.jpeg"

export default function Cards() {
  return (
    <div className="card">
        <img
        src={imagen}
        className="card-img-top"
        alt="..."
        />
        <div className="card-body d-flex align-items-center pb-1">
            <h3 className="card-title m-0">Card title</h3>
            <button type="button" className="btn favorite-btn">
                <FontAwesomeIcon icon={faHeart} />
            </button>
            <PlaygroundSpeedDial />
            
        </div>
        <div className="d-flex justify-content-between px-3 pb-3 align-items-center">
            <h6 className="ms-1">$ 30p.p.</h6>
            <div className="d-flex align-items-center">
                <h6 className="m-0 p-0">5.0</h6>
                <FontAwesomeIcon icon={faStar} className="starIcon ms-1"/>
            </div>
        </div>
    </div>
  );
}
