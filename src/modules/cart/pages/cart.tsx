import React from "react";
import { Box } from "@chakra-ui/react";

import { useQueryGetCart } from "../api";
import { CartItem } from "../components";
import { CustomTable } from "@/components";

import type { CartItem as CartItemProps } from "../api";
import { TableHeaderProps } from "@/components/widgets/table/table-header";

const headers: TableHeaderProps<CartItemProps> = [
  {
    label: "Product",
    value: "name",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Quantity",
    value: "quantity",
  },
  {
    label: "Total",
    value: "subTotalPrice",
  },
];

export const Cart = () => {
  const { data } = useQueryGetCart();

  console.log(data?.data);

  return (
    <Box w="min(100%, 1589px)" m="0 auto" py={16}>
      <CustomTable<CartItemProps>
        headers={headers}
        data={data?.data?.items ?? []}
      />
      {data?.data?.items.map((item) => {
        return <CartItem key={item.productId} />;
      })}
    </Box>
  );
};
