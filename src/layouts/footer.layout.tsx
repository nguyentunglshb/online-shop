import React from "react";
import {
  Box,
  HStack,
  Text,
  Link as ChakraLink,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { colorOveride } from "@/libs/chakra/colors-overide";
import { NavigationFn } from "@/dictionary";
import { CustomInput } from "@/components";

type TQuickLink = {
  to: string;
  label: string;
};

const quickLinks = [
  {
    to: NavigationFn.SEARCH,
    label: "Search",
  },
  {
    to: NavigationFn.TERMS,
    label: "Terms of Service",
  },
  {
    to: NavigationFn.POLICIES,
    label: "Policies",
  },
] as TQuickLink[];

export const Footer = () => {
  return (
    <Box bgColor={colorOveride.neutral[7]} p="45px 0 55px">
      <HStack maxW="1200px" m="0 auto">
        <VStack align="flex-start" w="50%">
          <Text>Quick links</Text>
          <HStack>
            {quickLinks.map((link) => (
              <ChakraLink key={link.label} to={link.to} as={Link}>
                {link.label}
              </ChakraLink>
            ))}
          </HStack>
        </VStack>
        <VStack align="flex-start" w="50%">
          <Text>Newsletter</Text>
          <InputGroup>
            <CustomInput placeholder="Email address" />
            <InputRightElement w="auto" p="1px">
              <Button variant="greyed" h="100%">
                Submit
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </HStack>
      <Divider p="45px 0 20px" borderColor={colorOveride.neutral[3]} />
      <HStack maxW="1200px" m="0 auto" p="32px 0 16px">
        <Box w="50%"></Box>
        <Box w="50%">
          <Text textAlign="right">© 2023, Dropr Powered by Shopify</Text>
        </Box>
      </HStack>
    </Box>
  );
};
