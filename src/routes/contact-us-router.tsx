import { RouteObject } from "react-router-dom";

import { ContactUsPage } from "@/modules";

export const contactUsRouter = {
  path: "contact",
  element: <ContactUsPage />,
} as RouteObject;
