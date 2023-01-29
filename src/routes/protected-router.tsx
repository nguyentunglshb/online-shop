import { ProfilePage } from "@/modules/user";
import { RouteObject } from "react-router-dom";
import { ProtectedElement } from "./elements";

export const protectedRoutes = {
  element: <ProtectedElement />,
  children: [
    {
      path: "profile",
      element: <ProfilePage />,
    },
  ],
} as RouteObject;
