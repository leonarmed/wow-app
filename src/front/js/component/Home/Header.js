import React from "react";
import {CustomMultiFilter} from "../CustomMultiFilter";

export default function Header() {
  return (
    <div className="container-header">
      <div className="header-video">
        <div className="responsive-video">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/659253679?h=1746a8d40f&amp;background=1"
            width="1080"
            height="320"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
      <div className="title t-4">¿Tienes algún plan para hoy?</div>
      <div className="subtitle">¡WOW te da ideas!</div>
      <CustomMultiFilter />
    </div>
  );
}
