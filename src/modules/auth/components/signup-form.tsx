import React, { useState } from "react";
import {
  Box,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Icon,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon } from "@chakra-ui/icons";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { ISignupForm } from "../models";
import { CustomInput } from "@/components";
import { colorOveride } from "@/libs/chakra/colors-overide";
import { useMutationSignup } from "../api/signup.api";
import { NavigationFn } from "@/dictionary";

const defaultValues = {
  username: "",
  password: "",
} as ISignupForm;

export const SignupForm = () => {
  const { handleSubmit, control } = useForm<ISignupForm>({
    defaultValues,
  });

  const [showPassword, setShowPassword] = useState(false);

  const { mutation } = useMutationSignup();

  const { mutate } = mutation;

  const togglePassword = () => setShowPassword((prev) => !prev);

  const onSubmit = (data: ISignupForm) => {
    return mutate(data);
  };

  return (
    <Box w="100%" p="32px">
      <Box>
        <Text variant="heading">Sign up</Text>
        <Text p="8px 0">Welcome to our world!</Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="20px">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Box>
                <Text>Email</Text>
                <InputGroup>
                  <CustomInput {...field} />
                  <InputRightElement>
                    <Icon as={EmailIcon} color={colorOveride.neutral[3]} />
                  </InputRightElement>
                </InputGroup>
              </Box>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Box>
                <Text>Password</Text>
                <InputGroup>
                  <CustomInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    autoComplete="on"
                  />
                  <InputRightElement>
                    <Icon
                      as={showPassword ? ViewOffIcon : ViewIcon}
                      onClick={togglePassword}
                      color={colorOveride.neutral[3]}
                      _hover={{
                        cursor: "pointer",
                      }}
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
            )}
          />
          <ChakraLink
            as={Link}
            to={NavigationFn.LOGIN}
            variant="underline"
            textAlign="right"
          >
            Already have an account? Sign in
          </ChakraLink>
          <Button type="submit">Sign up</Button>
        </Stack>
      </form>
    </Box>
  );
};
