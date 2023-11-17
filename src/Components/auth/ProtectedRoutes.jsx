import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Home from "../../Pages/Home";

const ProtectedRoutes = () => {
  const { token } = useSelector((store) => store.userInfo);
  if (token) {
    return <Home />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoutes;
