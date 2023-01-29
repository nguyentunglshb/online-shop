import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { getStoredAuth } from "@/libs";
import { NavigationFn } from "@/dictionary";

export const ProtectedElement = () => {
  return getStoredAuth() ? <Outlet /> : <Navigate to={NavigationFn.HOME} />;
};
