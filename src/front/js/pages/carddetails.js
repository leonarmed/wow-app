import React, { useState, useEffect, useContext } from "react";
import img from "../../img/nelson-arrieta-estereo-marketing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { request } from "../services/api";
import imagen from "../../img/default_img.jpeg";
import isEmpty from "is-empty";
import { Typography } from "@mui/material";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function CardDetails() {
  const params = useParams();
  const [comment, setComment] = useState("");
  const { store, actions } = useContext(Context);
  const [comments, setComments] = useState([]);
  const [event, setEvent] = useState([]);
  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const getEvent = async () => {
    actions.isLoading(true);
    const event = await fetch(
      `${process.env.BACKEND_URL}/api/event/${params.theid}`
    )
      .then((res) => {
        if (!res.ok) {
          console.log("error");
        }
        return res.json();
      })
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => HandlerError(error))
      .finally(actions.isLoading(false));
    // setCharacter(character.properties)
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="fondo container-fluid">
      <div className="hero">
        <div
          className="pt-5 text-center bg-image rounded-3 col-12 containerimage container-fluid"
          style={{
            backgroundImage: `url(${event.img_url ? event.img_url : imagen})`,
          }}
        >
          <div className="ola pb-3 pt-3">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">{event.title}</h1>
                <h4 className="mb-3">{event.category}</h4>
                {/* <a
                  className="btn btn-outline-light btn-lg"
                  href="#!"
                  role="button"
                >
                  Marca tu asistencia
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className=" container-fluid d-flex justify-content-between gap-3 align-items-center flex-wrap flex-md-nowrap barrasubimagen rounded">
          <div className="d-flex align-self-center px-3 py-3 FECHA rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-clock pe-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <p className="day font-weight-bold my-0 d-flex align-items-center ms-2">
              Te esperamos el {event.start_day}
            </p>
            {/* <p className="month text-uppercase my-0">NOV</p> */}
          </div>
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-geo-alt-fill mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
            </svg>
            <h3 className="mt-1 ms-2">{event.address}</h3>
          </div>
          {/* <button type="button" className="btn favorite-btn ps-5 pe-5  ">
            <FontAwesomeIcon icon={faHeart} />
          </button> */}
          {/* <div className="d-flex align-items-center">
            <h6 className="m-0 p-0">4 </h6>
            <FontAwesomeIcon icon={faStar} className="starIcon ms-1" />
          </div> */}
        </div>
      </div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 row pt-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5  text-center text-white overflow-hidden col-md-6 rounded partenegra">
          <div className="my-3 py-3">
            <h2 className="display-5">SINOPSIS</h2>
            <p className="lead">{event.description}</p>
          </div>
          <div className="bg-light box-shadow mx-auto rounded "></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-6 rounded">
          <div className="my-3 p-3">
            <h2 className="display-5 text-uppercase">Dirección y Precios</h2>
            <p className="lead">
              GOLD: $ {parseInt(event.price)}
              <br></br>
              PLATINUM: ${" "}
              {parseInt(event.price) + (30 * parseInt(event.price)) / 100}
              <br></br>
              DIAMANTE: ${" "}
              {parseInt(event.price) + (100 * parseInt(event.price)) / 100}
              <br></br>
            </p>
            {!isEmpty(event.geolocation) && (
              <div className="mapouter">
                <div className="gmap_canvas">
                  <Typography
                    variant="overline"
                    onClick={() => window.open(event.geolocation)}
                    style={{ cursor: "pointer" }}
                  >
                    Ver ubicación
                  </Typography>
                </div>
              </div>
            )}
          </div>
          <div className="bg-dark box-shadow mx-auto rounded "></div>
        </div>
      </div>
      <section className="formcomments justify-content-center gap-5 d-flex pt-5 flex-wrap">
        {/* <div className="card">
          <div className="card-body p-4">
            <div className="d-flex flex-start w-100">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                alt="avatar"
                width="65"
                height="65"
              />
              <div className="w-100">
                <h5>Add a comment</h5>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>
                      {labels[hover !== -1 ? hover : value]}
                    </Box>
                  )}
                </Box>
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    id="textAreaExample"
                    rows="4"
                    value={comment}
                    onChange={onChangeHandler}
                  ></textarea>
                  <label className="form-label" htmlFor="textAreaExample">
                    What is your view?
                  </label>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <button onClick={onClickHandler}>
                    Send <i className="fas fa-long-arrow-alt-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">COMENTARIOS</h5>
            <div className="card-text ">
              <div className="card mb-4 w-100">
                <div className="card-body">
                  <p>
                    {comments.map((text) => (
                      <div> {text}</div>
                    ))}
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <i className="far fa-thumbs-up mx-2 fa-xs text-black"></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
export default CardDetails;
