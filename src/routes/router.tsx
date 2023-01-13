import { createBrowserRouter } from "react-router-dom";

import { authRouter } from "./auth-router";
import { publicRouter } from "./public-router";

export const router = createBrowserRouter([
  { ...authRouter },
  { ...publicRouter },
]);
