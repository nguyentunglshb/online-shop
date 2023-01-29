import React from "react";
import { HStack, VStack } from "@chakra-ui/react";

import { LoginForm } from "../components";
// import { images } from "@/assets";

export const Login = () => {
  return (
    <HStack h="100%" justify="center" py={16}>
      <VStack w="50%">
        <LoginForm />
      </VStack>
    </HStack>
  );
};
