import React from "react";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { useQueryGetNewArrtivals } from "../api";
import { ProductCard } from "@/components";

export const NewArrivals = () => {
  const { data } = useQueryGetNewArrtivals();

  return (
    <Box w="min(100%, 1280px)" m="0 auto" pt="42px">
      <Text variant="sectionTitle">Discover NEW Arrivals</Text>
      <Text variant="sectionSubTitle" pb={12}>
        Recently added shirts!
      </Text>
      <Wrap spacingX={0}>
        {data?.data.map((product) => {
          return (
            <WrapItem key={product._id} w="25%">
              <ProductCard
                _id={product._id}
                name={product.name}
                currency={product.currency}
                currentPrice={product.currentPrice}
                originPrice={product.originPrice}
                headImageUrl={product.headImageUrl}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};
