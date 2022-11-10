import { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { request } from "../../services/api";
import { Context } from "../../store/appContext";
import HandlerError from "../../utils/HandleError";

export default function LoginControllers() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const schemaLogin = yup
    .object({
      email: yup.string().required("Este campo es requerido"),
      password: yup.string().required("Este campo es requerido"),
    })
    .required();
  const {
    control: controlInputs,
    handleSubmit: handleSubmitData,
    formState: { errors: errorsData },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const schemaRegister = yup
    .object({
      email: yup.string().required(),
      password: yup.string().required(),
      name: yup.string().required(),
      last_name: yup.string().required(),
      birth_date: yup.date().required(),
      phone: yup.string().required(),
    })
    .required("Este campo es requerido");
  const {
    control: controlInputsRegister,
    handleSubmit: handleSubmitDataRegister,
    formState: { errors: errorsDataRegister },
  } = useForm({
    resolver: yupResolver(schemaRegister),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = async (params) => {
    actions.isLoading(true);
    request({
      method: "POST",
      path: "/api/login",
      params,
    })
      .then((res) => {
        localStorage.setItem("token", res.token);
        actions.getUserInfo();
        navigate("/");
      })
      .catch((error) => HandlerError(error))
      .then(actions.isLoading(false));
  };

  const onRegister = async (params) => {
    Object.assign(params, { rol: "registered" });
    actions.isLoading(true);
    request({
      method: "POST",
      path: "/api/register",
      params,
    })
      .then((res) => {
        if (res) {
          const { email, password } = params;
          onLogin({ email, password });
        }
      })
      .catch((error) => HandlerError(error))
      .then(actions.isLoading(false));
  };

  return {
    controlInputs,
    errorsData,
    handleSubmitData,
    onLogin,
    onRegister,
    controlInputsRegister,
    errorsDataRegister,
    handleSubmitDataRegister,
  };
}
