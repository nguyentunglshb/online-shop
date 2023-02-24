import React from "react";
import { Box } from "@chakra-ui/react";

import { useQueryGetCart } from "../api";
import { CartItem } from "../components";
import { CustomTable } from "@/components";

const headers: string[] = ["", "Product", "Price", "Quantity", "Total"];

export const Cart = () => {
  const { data } = useQueryGetCart();

  console.log(data?.data);

  return (
    <Box w="min(100%, 1589px)" m="0 auto" py={16}>
      <CustomTable headers={headers} data={data?.data?.items ?? []} />
      {data?.data?.items.map((item) => {
        return <CartItem key={item.productId} />;
      })}
    </Box>
  );
};
