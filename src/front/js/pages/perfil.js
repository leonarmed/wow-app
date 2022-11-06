import { Card } from "@mui/material";
import React from "react";
import Cards from "../component/Home/Cards/Cards";

export const Perfil = () => {
    return(
        <div className="d-flex flex-wrap row m-4 p-4 main-container justify-content-around align-items-center">

            <div className="left row align-items-center text-center col-md-4 py-5 mb-4 justify-content-center">
                
                <img 
                    src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                    className="profile-pic mb-4 p-0"
                /> 
                <div className="person-info mb-4">
                    <h1>Name Lastname</h1>
                </div>
                <div className="other-info row align-items-center justify-content-center px-lg-5 py-3">
                    <div className="d-flex align-items-center justify-content-between information py-3 flex-wrap">
                        <h5 className="m-0">Email: </h5>
                        <h6 className="m-0">person@anything.com</h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between information py-3 flex-wrap">
                        <h5 className="m-0">Fecha nacimiento: </h5>
                        <h6 className="m-0">DD/MM/AA</h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between information py-3 flex-wrap">
                        <h5 className="m-0">Teléfono: </h5>
                        <h6 className="m-0">424-555555</h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between information py-3 flex-wrap">
                        <h5 className="m-0">Se unió el: </h5>
                        <h6 className="m-0">DD/MM/AA</h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between information py-3 flex-wrap">
                        <h5 className="m-0">Rol: </h5>
                        <h6 className="m-0">admin</h6>
                    </div>
                    
                    
                </div>

                <button type="button" className="btn btn-primary mt-5 edit-btn">Editar información</button>
            </div>

            <div className="col-md-7 p-0">
                <div class="card-favoritos align-items-center justify-content-center mb-4">
                    <div class="card-header">
                        <h3 className="m-0">Favoritos</h3>
                    </div>
                    <div className="overflow-auto">
                        <div className="card-container d-flex">
                            <Cards data={
                                {id: 1,
                                category: "Tour",
                                title: "Geohistorical Tour of the Spiritual Capital of Venezuela ",
                                startDate: "25/10/2022 00:30:00",
                                endDate: null,
                                city: "Guanare",
                                state: "Portuguesa",
                                price: "140$",
                                likes: 4,
                                geolocation: "https://goo.gl/maps/cqK32jmie4ht5Dvp9",
                                urlImage:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp_p-n-Ql552fTXjyEEdlNWDlRhSSPLBOyg&usqp=CAU"}} />
                        </div>
                    </div>
                </div>

                <div class="card-favoritos">
                    <div class="card-header">
                        <h3 className="m-0">Asistencias</h3>
                    </div>
                    
                    <div className="overflow-auto">
                        <div className="card-container d-flex">
                            <Cards data={
                                {id: 1,
                                category: "Tour",
                                title: "Geohistorical Tour of the Spiritual Capital of Venezuela ",
                                startDate: "25/10/2022 00:30:00",
                                endDate: null,
                                city: "Guanare",
                                state: "Portuguesa",
                                price: "140$",
                                likes: 4,
                                geolocation: "https://goo.gl/maps/cqK32jmie4ht5Dvp9",
                                urlImage:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp_p-n-Ql552fTXjyEEdlNWDlRhSSPLBOyg&usqp=CAU"}}
                            />
                        </div>
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
}