import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./Auth";

export default function PrivateOutlet() {
  const Auth = useAuth();
  return Auth ? <Outlet /> : <Navigate to="/" />;
}
