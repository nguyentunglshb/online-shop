import { RouteObject } from "react-router-dom";

import { AuthLayout } from "@/layouts";
import { HomePage } from "@/modules";

export const publicRouter = {
  element: <AuthLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
} as RouteObject;
