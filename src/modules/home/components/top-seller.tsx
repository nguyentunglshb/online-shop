import React from "react";
import { Box, Button, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";

import { useQueryGetNewArrtivals } from "../api";
import { ProductCard } from "@/components";

export const TopSeller = () => {
  const { data } = useQueryGetNewArrtivals();

  return (
    <VStack w="min(100%, 1280px)" m="0 auto" py="64px">
      <Text variant="sectionTitle">Top Sellers</Text>
      <Text variant="sectionSubTitle" pb={12}>
        Browse our top-selling products
      </Text>
      <Wrap w="100%" spacingX={0} overflow="unset">
        {data?.data.slice(0, 4).map((product) => {
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
      <Box pt="48px">
        <Button variant="addToCart">Shop now</Button>
      </Box>
    </VStack>
  );
};
