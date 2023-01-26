import React from "react";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";

import { Images } from "@/assets";

export const Hero = () => {
  return (
    <Box w="100%" pos="relative">
      <Image src={Images.hero} w="100%" />
      <VStack
        pos="absolute"
        w="min(100%, 1589px)"
        top="50%"
        left="50%"
        // right={0}
        transform="translate(-50%, -50%)"
        align="flex-end"
      >
        <VStack spacing={8}>
          <VStack>
            <Text variant="hero" textAlign="center">
              stylist picks beat
            </Text>
            <Text variant="hero" textAlign="center">
              the heat
            </Text>
          </VStack>
          <Button variant="hero">Shop now</Button>
        </VStack>
      </VStack>
    </Box>
  );
};
