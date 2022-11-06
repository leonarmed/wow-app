import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/" /> : children;
}

export default PublicRoute;
