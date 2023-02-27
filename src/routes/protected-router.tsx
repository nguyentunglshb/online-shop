import { RouteObject } from "react-router-dom";

import { ProtectedElement } from "./elements";
import { ProfilePage, Cart, CheckoutPage } from "@/modules";

export const protectedRoutes = {
  element: <ProtectedElement />,
  children: [
    {
      path: "profile",
      element: <ProfilePage />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "checkout",
      element: <CheckoutPage />,
    },
  ],
} as RouteObject;
