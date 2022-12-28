import { createBrowserRouter } from "react-router-dom";

import { authRouter } from "./auth-router";

export const router = createBrowserRouter([{ ...authRouter }]);
