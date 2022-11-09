import { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { request } from "../../services/api";
import { Context } from "../../store/appContext";
import HandlerError from "../../utils/HandleError";
import isEmpty from "is-empty";

export default function ProfileControllers() {
  const { store, actions } = useContext(Context);
  const [selectedImages, setSelectedImages] = useState([]);

  const schemaUpdate = yup
    .object({
      password: yup.string(),
      phone: yup.string(),
      file: yup.string(),
    })
    .required("Este campo es requerido");
  const {
    control: controlInputs,
    handleSubmit: handleSubmitData,
    formState: { errors: errorsData },
  } = useForm({
    resolver: yupResolver(schemaUpdate),
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
          Object.assign(bodyParams, { url_image: image.secure_url });
        })
        .catch((err) => console.log(err));
    }
    request({
      method: "POST",
      customHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      path: "/api/user",
      params,
    })
      .then((res) => {
        if (res) {
          actions.saveUserInfo(res);
          actions.isLoading(false);
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
  };
}
