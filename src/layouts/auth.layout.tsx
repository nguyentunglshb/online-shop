import React from "react";

import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

import { Footer } from "./footer.layout";
import { Header } from "./header.layout";

export const AuthLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
