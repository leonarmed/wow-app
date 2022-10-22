import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PlaygroundSpeedDial from "../Home/speedDial";

export default function Cards() {
  return (
    <div className="card">
      <img
        src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex align-items-center">
        <h4 className="card-title m-0">Card title</h4>
        <button type="button" className="btn favorite-btn">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        
      </div>
    </div>
  );
}
