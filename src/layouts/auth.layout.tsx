import React from "react";

import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
