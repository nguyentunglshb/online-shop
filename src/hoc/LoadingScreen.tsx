import { colorOveride } from "@/libs/chakra/colors-overide";
import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

interface ILoading {
  loading?: boolean;
  children: React.ReactNode;
}

export function LoadingScreen(props: ILoading) {
  const { loading = false, children } = props;
  return loading ? (
    <Box>
      <Spinner size="xl" color={colorOveride.primary.primary} />
    </Box>
  ) : (
    <Box>{children}</Box>
  );
}
