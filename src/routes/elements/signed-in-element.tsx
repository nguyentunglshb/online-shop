import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { getStoredAuth } from "@/libs";
import { NavigationFn } from "@/dictionary";

export const SignedInElement = () => {
  return getStoredAuth() ? <Navigate to={NavigationFn.HOME} /> : <Outlet />;
};
