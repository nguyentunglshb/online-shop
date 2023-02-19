import React from "react";
import { Box, VStack, Image, Text, HStack } from "@chakra-ui/react";

import { Images } from "@/assets";
import { ContactForm } from "../components/contact-form";
import { AddressBlock, EmailBlock } from "../components";

export const ContactUsPage = () => {
  return (
    <VStack w="100%">
      <Box w="100%" h="346px" pos="relative">
        <Image w="100%" h="100%" fit="cover" src={Images.contact} />
        <Text pos="absolute" variant="pageTitle" bottom={16} left={16}>
          CONTACT US
        </Text>
      </Box>
      <HStack w="min(100%, 1280px)" m="0 auto" pt="42px">
        <ContactForm />
        <VStack flex={1}>
          <AddressBlock />
          <EmailBlock />
        </VStack>
      </HStack>
    </VStack>
  );
};
