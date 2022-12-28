import { AuthLayout } from "@/layouts";
import { Login } from "@/modules";
import { RouteObject } from "react-router";

export const authRouter = {
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
  ],
} as RouteObject;
