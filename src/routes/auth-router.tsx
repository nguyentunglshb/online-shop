import { RouteObject } from "react-router";

import { Login, SignUp } from "@/modules";

export const authRouter = {
  // element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
  ],
} as RouteObject;
