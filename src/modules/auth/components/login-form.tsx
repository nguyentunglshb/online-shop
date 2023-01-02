import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  InputGroup,
  InputRightElement,
  Icon,
  Box,
  Text,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { ILoginForm } from "../models";
import { colorOveride } from "@/libs/chakra/colors-overide";
import { CustomInput } from "@/components";
import { useMutationLogin } from "../api/login.api";
import { NavigationFn } from "@/dictionary";

const defaultValues = {
  username: "",
  password: "",
} as ILoginForm;

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<ILoginForm>({
    defaultValues,
  });

  const [showPassword, setShowPassword] = useState(false);

  const { mutation } = useMutationLogin();

  const { mutate } = mutation;

  const togglePassword = () => setShowPassword((prev) => !prev);

  const onSubmit = (data: ILoginForm) => {
    return mutate(data);
  };

  return (
    // <LoadingScreen loading={isLoading}>
    <Box w="100%" p="32px">
      <Box>
        <Text variant="heading">Sign in</Text>
        <Text p="8px 0">Welcome back! Please enter your details</Text>
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
            to={NavigationFn.FORGOTPASSWORD}
            variant="underline"
            textAlign="right"
          >
            Forgot your password?
          </ChakraLink>
          <Button type="submit">Sign in</Button>
          <ChakraLink as={Link} to={NavigationFn.SIGNUP} textAlign="center">
            Create account
          </ChakraLink>
        </Stack>
      </form>
    </Box>
    // </LoadingScreen>
  );
};
