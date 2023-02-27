import React from "react";
import { Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useQueryGetCart } from "@/modules";
import { ColumnDefinitionType, CustomTable } from "@/components";
import { formatPrice } from "@/utils";

import type { CartItem as CartItemProps } from "@/modules";
import { NavigationFn } from "@/dictionary";

const columns = [
  {
    key: "name",
    header: "Product",
    render: ({ name, productId }) => (
      <ChakraLink
        as={Link}
        to={NavigationFn.PRODUCT_DETAIL.replace(":id", productId)}
      >
        {name}
      </ChakraLink>
    ),
  },
  {
    key: "price",
    header: "Price",
    render: ({ price }) => <>{formatPrice("VND", price)}</>,
  },
  {
    key: "quantity",
    header: "Quantity",
  },
  {
    key: "subTotalPrice",
    header: "Total",
    render: ({ subTotalPrice }) => <>{formatPrice("VND", subTotalPrice)}</>,
  },
] as ColumnDefinitionType<CartItemProps, keyof CartItemProps>[];

export const MyOrder = () => {
  const { data } = useQueryGetCart();

  return (
    <Box w="100%">
      <CustomTable<CartItemProps, keyof CartItemProps>
        columns={columns}
        data={data?.data?.items ?? []}
      />
      <Text variant="sectionSubTitle" py={4}>
        Total:{" "}
        <Text as="span" color="primary.primary">
          {formatPrice("VND", data?.data?.totalPrice ?? 0)}
        </Text>
      </Text>
    </Box>
  );
};
