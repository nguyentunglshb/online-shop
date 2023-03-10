import React from "react";
import {
  Box,
  Button,
  Center,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { useQueryGetCart } from "../api";
import { CartItem, CartTotal } from "../components";
import { ColumnDefinitionType, CustomTable } from "@/components";
import { formatPrice } from "@/utils";
import { NavigationFn } from "@/dictionary";

import type { CartItem as CartItemProps } from "../api";

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
    render: ({ quantity }) => (
      <Center w="53px" h="42px" border="2px solid #ebebeb">
        <Text>{quantity}</Text>
      </Center>
    ),
  },
  {
    key: "subTotalPrice",
    header: "Total",
    render: ({ subTotalPrice }) => <>{formatPrice("VND", subTotalPrice)}</>,
  },
] as ColumnDefinitionType<CartItemProps, keyof CartItemProps>[];

export const Cart = () => {
  const { data } = useQueryGetCart();
  const navigate = useNavigate();

  return (
    <Box w="min(100%, 1589px)" m="0 auto" py={16}>
      <CustomTable<CartItemProps, keyof CartItemProps>
        columns={columns}
        data={data?.data?.items ?? []}
        hasCloseIcon
      />
      {data?.data?.items.map((item) => {
        return <CartItem key={item.productId} />;
      })}
      <CartTotal total={data?.data?.totalPrice} />
      <Button
        variant="checkout"
        onClick={() => navigate(NavigationFn.CHECK_OUT)}
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
};
