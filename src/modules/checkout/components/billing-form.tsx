import React from "react";
import {
  Box,
  Text,
  VStack,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { EmailIcon } from "@chakra-ui/icons";

import { CustomInput } from "@/components";
import { colorOveride } from "@/libs/chakra/colors-overide";

export const BillingForm = () => {
  const { control } = useFormContext();

  return (
    <VStack align="flex-start" w="min(620px, 100%)">
      <Text variant="sectionTitle" textAlign="center">
        Billing details
        <Text as="span" color="red">
          *
        </Text>
      </Text>
      <Controller
        name="fullname"
        control={control}
        render={({ field }) => (
          <Box w="100%" py={2}>
            <Text>
              Full name
              <Text as="span" color="red">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput {...field} />
            </InputGroup>
          </Box>
        )}
      />
      <Controller
        name="fullname"
        control={control}
        render={({ field }) => (
          <Box w="100%" py={2}>
            <Text>
              Street address
              <Text as="span" color="red">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput {...field} />
            </InputGroup>
          </Box>
        )}
      />
      <Controller
        name="fullname"
        control={control}
        render={({ field }) => (
          <Box w="100%" py={2}>
            <Text>
              Town / City
              <Text as="span" color="red">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput {...field} />
            </InputGroup>
          </Box>
        )}
      />
      <Controller
        name="fullname"
        control={control}
        render={({ field }) => (
          <Box w="100%" py={2}>
            <Text>
              Phone
              <Text as="span" color="red">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput {...field} />
            </InputGroup>
          </Box>
        )}
      />
      <Controller
        name="fullname"
        control={control}
        render={({ field }) => (
          <Box w="100%" py={2}>
            <Text>
              Email address
              <Text as="span" color="red">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput {...field} />
              <InputRightElement>
                <Icon as={EmailIcon} color={colorOveride.neutral[3]} />
              </InputRightElement>
            </InputGroup>
          </Box>
        )}
      />
    </VStack>
  );
};
