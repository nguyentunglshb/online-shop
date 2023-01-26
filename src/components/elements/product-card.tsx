import React from "react";
import { Badge, Box, Image, Text } from "@chakra-ui/react";

import { IProduct } from "@/interface";
import { discountPercent, formatPrice } from "@/utils";
import { Link } from "react-router-dom";
import { NavigationFn } from "@/dictionary";

interface ProductCardProps
  extends Pick<
    IProduct,
    | "_id"
    | "name"
    | "currency"
    | "currentPrice"
    | "originPrice"
    | "headImageUrl"
  > {}

export const ProductCard = (props: ProductCardProps) => {
  const { _id, name, headImageUrl, currentPrice, originPrice, currency } =
    props;

  return (
    <Box
      as={Link}
      to={NavigationFn.PRODUCT_DETAIL.replace(":id", _id)}
      w="100%"
      px={4}
      pos="relative"
      bgColor="white"
    >
      <Box w="100%" h="342px">
        <Image src={headImageUrl} w="100%" h="100%" objectFit="contain" />
      </Box>
      <Text textAlign="center" variant="productName" pt={4} pb={2}>
        {name}
      </Text>

      {currentPrice && (
        <>
          <Text variant="originPrice" textAlign="center">
            {formatPrice(currency, originPrice)}
          </Text>
          <Text variant="currentPrice" textAlign="center">
            {formatPrice(currency, currentPrice)}{" "}
            <Badge colorScheme="red">
              {discountPercent(currentPrice, originPrice)}
            </Badge>
          </Text>
        </>
      )}
    </Box>
  );
};
