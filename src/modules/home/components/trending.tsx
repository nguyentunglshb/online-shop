import React from "react";
import { Box, Stack, Tag, Text } from "@chakra-ui/react";

const tagMock = [
  "2022",
  "spring",
  "collection",
  "fall",
  "dress",
  "autumncolletion",
  "openfashion",
];

export const Trending = () => {
  return (
    <Box py={16}>
      <Text
        variant="sectionTitle"
        letterSpacing="4px"
        textTransform="uppercase"
      >
        @Trending
      </Text>
      <Stack
        pt={4}
        spacing={8}
        w="min(100%, 1589px)"
        m="0 auto"
        direction="row"
      >
        {tagMock.map((tag) => (
          <Tag variant="trend" key={tag}>
            #{tag}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
};
