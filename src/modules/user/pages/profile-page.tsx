import React from "react";
import { Avatar, Box, HStack, Image, Text } from "@chakra-ui/react";

import { useQueryGetUser } from "../api";

export const ProfilePage = () => {
  const { data } = useQueryGetUser();

  return (
    <Box w="min(100%, 1589px)" m="0 auto" py={16}>
      <Box w="500px" h="500px" m="0 auto" pos="relative">
        <Image src={data?.data?.avatarUrl} w="100%" h="100%" fit="cover" />
        <Text variant="profileInfo" pos="absolute" bottom={0} left={8}>
          {data?.data.username}
        </Text>
      </Box>
    </Box>
  );
};
