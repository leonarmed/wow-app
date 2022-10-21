import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="home text-center mt-5">
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

      {/* <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div> */}
    </div>
  );
};
