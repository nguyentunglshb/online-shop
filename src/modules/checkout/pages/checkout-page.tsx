import React from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";

import { BillingForm, COD, MyOrder } from "../components";
import { FormProvider, useForm } from "react-hook-form";

export const CheckoutPage = () => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <VStack
        w="min(100%, 1589px)"
        m="0 auto"
        py={16}
        as="form"
        align="flex-start"
        spacing={12}
      >
        <BillingForm />
        <MyOrder />
        <COD />
        <Box w="100%" display="flex" justifyContent="flex-end">
          <Button variant="checkout">place order</Button>
        </Box>
      </VStack>
    </FormProvider>
  );
};
