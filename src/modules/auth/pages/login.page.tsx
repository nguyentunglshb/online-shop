import React from "react";
import { HStack, Box, VStack, Icon, Image } from "@chakra-ui/react";

import { LoginForm } from "../components";
import { images, Logo } from "@/assets";

export const Login = () => {
  return (
    <HStack h="100%">
      <Box w="50%">
        <Image src={images.authBackground} fit="contain" />
      </Box>
      <VStack w="50%">
        <Icon as={Logo} />
        <LoginForm />
      </VStack>
    </HStack>
  );
};
