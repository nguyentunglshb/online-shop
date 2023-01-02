import React from "react";

import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Footer } from "./footer.layout";

export const AuthLayout = () => {
  return (
    <Box>
      <Outlet />
      <Footer />
    </Box>
  );
};
