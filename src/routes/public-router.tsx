import { RouteObject } from "react-router-dom";

import { productRouter } from "./product-router";

import { HomePage } from "@/modules";

export const publicRouter = {
  // element: <AuthLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    { ...productRouter },
  ],
} as RouteObject;
