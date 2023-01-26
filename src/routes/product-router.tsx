import { RouteObject } from "react-router-dom";

import { ProductDetail } from "@/modules/product";

export const productRouter = {
  path: "shop",
  children: [
    {
      path: "/shop/:id",
      element: <ProductDetail />,
    },
  ],
} as RouteObject;
