import React from "react";
import {
  Box,
  Button,
  HStack,
  InputGroup,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { CustomInput } from "@/components";
import { Controller, useForm } from "react-hook-form";

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const defaultValues = {
  name: "",
  email: "",
  message: "",
} as ContactFormProps;

export const ContactForm = () => {
  const { handleSubmit, control } = useForm<ContactFormProps>({
    defaultValues,
  });

  const onSubmit = (data: ContactFormProps) => console.log(data);

  return (
    <Box flex={2} as="form" onSubmit={handleSubmit(onSubmit)} pb="100px">
      <Text variant="sectionTitle" textAlign="left" pb={8}>
        We would love to hear from you.
      </Text>
      <Text variant="sectionSubTitle" textAlign="left" pb={12}>
        If you have any query or any type of suggestion, you can contact us
        here. We would love to hear from you.
      </Text>
      <VStack spacing={5}>
        <HStack spacing={5} w="100%">
          {" "}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Box flex={1}>
                <Text>Name</Text>
                <InputGroup>
                  <CustomInput {...field} />
                </InputGroup>
              </Box>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Box flex={1}>
                <Text>Email</Text>
                <InputGroup>
                  <CustomInput {...field} />
                </InputGroup>
              </Box>
            )}
          />
        </HStack>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Box w="100%">
              <Text>Message</Text>
              <InputGroup>
                <Textarea {...field} borderRadius={0} h="188px" />
              </InputGroup>
            </Box>
          )}
        />
      </VStack>
      <Box pt={6}>
        <Button variant="addToCart">Send message</Button>
      </Box>
    </Box>
  );
};
