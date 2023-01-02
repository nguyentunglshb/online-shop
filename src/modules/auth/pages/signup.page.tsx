import React from "react";
import { HStack, VStack, Icon, Box, Image } from "@chakra-ui/react";

import { images, Logo } from "@/assets";
import { SignupForm } from "../components/signup-form";

export const SignUp = () => {
  return (
    <HStack h="100%">
      <Box w="50%" alignSelf="stretch">
        <Image src={images.authBackground} h="100%" fit="cover" />
      </Box>
      <VStack w="50%">
        <Box alignSelf="flex-start" p="32px 32px 0 32px">
          <Icon as={Logo} />
        </Box>
        <SignupForm />
      </VStack>
    </HStack>
  );
};
