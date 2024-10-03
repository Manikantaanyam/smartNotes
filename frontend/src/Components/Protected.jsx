import React from "react";
import { getItem } from "./Session";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const authenticate = getItem("token");
  if (!authenticate) {
    return <Navigate to="/" />;
  }
  const parseToken = JSON.parse(authenticate);
  if (!parseToken.token) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
};

export default Protected;
