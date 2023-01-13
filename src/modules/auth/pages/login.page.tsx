import React from "react";
import { HStack, Box, VStack, Image } from "@chakra-ui/react";

import { LoginForm } from "../components";
// import { images } from "@/assets";

export const Login = () => {
  return (
    <HStack h="100%">
      <Box w="50%" alignSelf="stretch">
        {/* <Image src={images.authBackground} h="100%" fit="cover" /> */}
      </Box>
      <VStack w="50%">
        <Box alignSelf="flex-start" p="32px 32px 0 32px">
          {/* <Icon as={Logo} /> */}
        </Box>
        <LoginForm />
      </VStack>
    </HStack>
  );
};
