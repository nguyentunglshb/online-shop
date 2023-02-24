import React from "react";
import { Avatar, Box, HStack, Image, Text } from "@chakra-ui/react";

import { useQueryGetUser } from "../api";

export const ProfilePage = () => {
  const { data } = useQueryGetUser();

  return (
    <Box w="min(100%, 1589px)" m="0 auto" py={16}>
      <Box w="100%" pos="relative" mb={20}>
        <Box
          w="100%"
          h="250px"
          bgImg="linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )"
          borderTopRadius="2xl"
        ></Box>
        <Avatar
          src={data?.data?.avatarUrl}
          size="2xl"
          outline="8px solid white"
          pos="absolute"
          bottom={0}
          transform="translate(50%, 50%)"
        />
      </Box>
      <Box w="100%" px={16}>
        <Text variant="productDetailName">{data?.data?.username}</Text>
      </Box>
    </Box>
  );
};
