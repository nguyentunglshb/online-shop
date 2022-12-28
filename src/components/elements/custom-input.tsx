import React from "react";
import { Input, InputProps } from "@chakra-ui/input";

interface IProps extends InputProps {}

export const CustomInput = (props: IProps) => {
  return <Input {...props} focusBorderColor="primary.primary" />;
};
