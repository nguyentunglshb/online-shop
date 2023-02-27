import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { formatPrice } from "@/utils";

export const CartTotal = ({ total }: { total?: number }) => {
  return total ? (
    <Box w="min(531px, 100%)" pt={20} pb={8}>
      <Text variant="sectionTitle" textAlign="left">
        Cart Totals
      </Text>
      <HStack
        w="100%"
        justify="space-between"
        py={5}
        borderBottom="1px solid #E5E5E5"
      >
        <Text>Subtotal</Text>
        <Text>{formatPrice("VND", total)}</Text>
      </HStack>
      <HStack
        w="100%"
        justify="space-between"
        py={5}
        borderBottom="1px solid #E5E5E5"
      >
        <Text>Shipping Fee</Text>
        <Text>FREE!!!</Text>
      </HStack>
      <HStack w="100%" justify="space-between" py={5}>
        <Text fontWeight={700}>Total</Text>
        <Text fontWeight={700}>{formatPrice("VND", total)}</Text>
      </HStack>
    </Box>
  ) : (
    <></>
  );
};
