import { AuthLayout } from "@/layouts";
import { createBrowserRouter } from "react-router-dom";

import { authRouter } from "./auth-router";
import { protectedRoutes } from "./protected-router";
import { publicRouter } from "./public-router";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ ...authRouter }, { ...publicRouter }, { ...protectedRoutes }],
  },
]);
