import { RouteObject } from "react-router";

import { Login, SignUp } from "@/modules";
import { SignedInElement } from "./elements";

export const authRouter = {
  element: <SignedInElement />,
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
