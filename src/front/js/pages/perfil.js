import React, { useContext } from "react";
import Cards from "../component/Home/Cards/Cards";
import { Context } from "../store/appContext";

export const Perfil = () => {
    const {store, actions} = useContext(Context)
    const {birth_date, last_name, name, phone, url_image} = store.me
    return(
        <div className="d-flex flex-wrap row m-4 p-4 main-container">
            <div className="left align-items-center text-center col-md-4 py-5">
                
                <img 
                    src={url_image ? url_image : 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'}
                    className="profile-pic mb-3"
                /> 
                <div className="person-info">
                    <h2>{`${name} ${last_name}`}</h2>
                </div>
                <button type="button" className="btn btn-primary mt-3">Editar imagen</button>
            </div>

            <div className="align-items-center col-md-8 justify-content-center px-5">
                <div class="card-favoritos">
                    <div class="card-header">
                        Favoritos
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

                <div class="card-favoritos">
                    <div class="card-header">
                        Asistencias
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
}