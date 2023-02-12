import { RouteObject } from "react-router-dom";

import { productRouter } from "./product-router";

import { HomePage } from "@/modules";
import { contactUsRouter } from "./contact-us-router";

export const publicRouter = {
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    { ...productRouter },
    { ...contactUsRouter },
  ],
} as RouteObject;
