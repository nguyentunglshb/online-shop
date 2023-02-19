import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useMutationAddToCart, useQueryGetProductDetail } from "../api";
import { DescriptionReviewBox } from "../components";
import { discountPercent, formatPrice } from "@/utils";
import { CustomSelect, SelectOptionProps } from "@/components";

const sizeOptions = [
  {
    label: "Small",
    subLabel: "S",
    value: "s",
  },
  {
    label: "Medium",
    subLabel: "M",
    value: "m",
  },
  {
    label: "Large",
    subLabel: "L",
    value: "l",
  },
  {
    label: "Extra Large",
    subLabel: "XL",
    value: "xl",
  },
] as SelectOptionProps[];

export const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useQueryGetProductDetail(id!);

  const { mutate } = useMutationAddToCart(data?.data?.name ?? "");

  const [selectedSize, setSelectedSize] = useState("");

  const addToCart = useCallback(
    () =>
      mutate({
        name: data?.data?.name ?? "",
        price: data?.data?.currentPrice ?? 0,
        productId: data?.data?._id ?? "",
        quantity: 1,
      }),
    [data]
  );

  const handleSizeSelectChange = (value: string) => {
    setSelectedSize(value);
  };

  return (
    <Box w="min(100%, 1589px)" m="0 auto" pt={16}>
      <Stack direction="row">
        <Box w="45%" pos="relative">
          <Image src={data?.data.headImageUrl} />
          {data?.data.currentPrice && (
            <Center
              pos="absolute"
              rounded="full"
              bg="orange"
              color="white"
              h="50px"
              w="50px"
              top={4}
              left={4}
              fontSize="15px"
              fontWeight="700"
            >
              {discountPercent(data?.data.currentPrice, data?.data.originPrice)}
            </Center>
          )}
        </Box>
        <Box px="8">
          <Text variant="productDetailName">{data?.data.name}</Text>
          {data?.data.currentPrice && (
            <HStack spacing={4} py={6}>
              <Text variant="productDetailOriginPrice">
                {formatPrice(data?.data.currency, data?.data.originPrice)}
              </Text>
              <Text variant="productDetailCurrentPrice">
                {formatPrice(data?.data.currency, data?.data.currentPrice)}
              </Text>
            </HStack>
          )}
          <Text>{data?.data.content}</Text>
          <Box py={9}>
            {" "}
            <CustomSelect
              value={selectedSize}
              options={sizeOptions}
              placeHolder="Select Size"
              onChange={handleSizeSelectChange}
            />
          </Box>
          <Box pb={9}>
            <Button variant="addToCart" onClick={addToCart}>
              Add to Cart
            </Button>
          </Box>
          <Box>
            <Text>
              Tags:{" "}
              <Text as="span" color="neutral.5">
                {data?.data.tags.join(", ")}
              </Text>
            </Text>
          </Box>
        </Box>
      </Stack>
      <Box pt={16}>
        <DescriptionReviewBox description={data?.data.description} />
      </Box>
    </Box>
  );
};
