import React, { forwardRef, LegacyRef } from "react";
import { Input, InputProps } from "@chakra-ui/input";

interface IProps extends InputProps {}

export const CustomInput = forwardRef(
  (props: IProps, ref?: LegacyRef<HTMLInputElement>) => {
    return (
      <Input
        bgColor="white"
        {...props}
        ref={ref}
        focusBorderColor="primary.primary"
      />
    );
  }
);
