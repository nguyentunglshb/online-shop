import React from "react";
import { Box, HStack, VStack, Center, Text, Button } from "@chakra-ui/react";

const PromoItem = ({
  w,
  h,
  flex,
  title,
  subTitle,
}: {
  w: string;
  h: string;
  flex: number;
  title: string;
  subTitle: string;
}) => (
  <Center w={w} h={h} bgColor="black" flex={flex}>
    <VStack w="max(50%, 406px)" spacing={6}>
      <Text variant="promoTitle">{title}</Text>
      <Text variant="promoSubtitle">{subTitle}</Text>
      <Button variant="promo">buy now</Button>
    </VStack>
  </Center>
);

export const Promo = () => {
  return (
    <HStack w="min(100%, 1589px)" h="429px" m="0 auto" pt="32px">
      <PromoItem
        w="58%"
        h="100%"
        flex={3}
        title="peace of mind"
        subTitle=" A one-stop platform for all your fashion needs, hassle-free. Buy with a
        peace of mind."
      />
      <PromoItem
        w="58%"
        h="100%"
        flex={2}
        title="Buy 2 Get 1 Free"
        subTitle="End of season sale. Buy any 2 items of your choice and get 1 free."
      />
    </HStack>
  );
};
