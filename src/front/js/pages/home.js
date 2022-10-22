import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Header from "../component/Home/Header";
import Cards from "../component/Home/Cards";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="home text-center mt-5 d-block">
      <Header />
      <div className="container-fluid">
        <Cards />
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
