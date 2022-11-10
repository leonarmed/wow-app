import React from 'react'
import { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { request } from "../../services/api";
import { Context } from "../../store/appContext";
import HandlerError from "../../utils/HandleError";
import isEmpty from "is-empty";

export default function HomeControllers() {
  const { store, actions } = useContext(Context);
  const [selectedImages, setSelectedImages] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const schema = yup
    .object({
      title: yup.string().required("Este campo es requerido"),
      address: yup.string().required("Este campo es requerido"),
      price: yup.string().required("Este campo es requerido"),
      description: yup.string().required("Este campo es requerido"),
      category: yup.string().required("Este campo es requerido"),
      start_day: yup.string().required("Este campo es requerido"),
      end_day: yup.string().required("Este campo es requerido"),
      geolocation: yup.string(),
    })
    .required();
  const {
    control: controlInputs,
    handleSubmit: handleSubmitData,
    formState: { errors: errorsData },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (params) => {
    actions.isLoading(true);
    let bodyParams = params;
    if (!isEmpty(selectedImages)) {
      const formData = new FormData();
      formData.append("file", selectedImages);
      formData.append("upload_preset", "l8wxipl7wow");
      await fetch("https://api.cloudinary.com/v1_1/testgbc/upload/", {
        method: "POST",
        body: formData,
      })
        .then(async (res) => {
          const image = await res.json();
          Object.assign(bodyParams, { img_url: image.secure_url });
        })
        .catch((err) => console.log(err));
    }
    Object.assign(bodyParams, { user_id: store.me.id });
    request({
      method: "POST",
      customHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      path: "/api/event",
      params: bodyParams,
    })
      .then((res) => {
        if (res) {
          setSelectedImages('')
          actions.getEvents();
          setOpen(false)
        }
      })
      .catch((error) => HandlerError(error))
      .then(actions.isLoading(false));
  };

  return {
    controlInputs,
    errorsData,
    handleSubmitData,
    onSubmit,
    setSelectedImages,
    selectedImages,
    handleOpen,
    handleClose,
    open,
  };
}
