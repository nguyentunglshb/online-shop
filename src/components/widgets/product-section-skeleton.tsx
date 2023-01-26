import React from "react";
import { Box, Skeleton, Wrap, WrapItem } from "@chakra-ui/react";

interface SectionSkeletonProps {
  isLoaded: boolean;
}

export const ProductSectionSkeleton = (props: SectionSkeletonProps) => {
  return (
    <Wrap spacingX={0}>
      {Array(8)
        .fill("_")
        .map((_, index) => {
          return (
            <WrapItem key={index} w="25%">
              <Box w="100%" px={2.5}>
                <Skeleton h="342px" w="100%" isLoaded={false}></Skeleton>
              </Box>
            </WrapItem>
          );
        })}
    </Wrap>
  );
};
