import { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { request } from "../../services/api";
import { Context } from "../../store/appContext";

export default function LoginControllers() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup
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
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function getUserInfo() {
    try {
      const response = await request({
        method: "GET",
        path: "/api/user",
        customHeaders: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      actions.saveUserInfo(response);
    } catch (error) {
      console.log(error);
    }
  }

  const onLogin = async (params) => {
    try {
      // loadingRequest.showLoading()
      const response = await request({
        method: "POST",
        path: "/api/login",
        params,
      });
      localStorage.setItem("token", response.token);
      getUserInfo();
      navigate("/");
    } catch (error) {
      console.log(error);
      // HandlerError(error);
    } finally {
      // loadingRequest.hiddenLoading();
    }
  };

  return {
    controlInputs,
    errorsData,
    handleSubmitData,
    onLogin,
  };
}
