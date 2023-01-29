import { Box } from "@chakra-ui/react";

import {
  Benefit,
  Hero,
  NewArrivals,
  Promo,
  TopSeller,
  Trending,
} from "../components";

export const HomePage = () => {
  return (
    <Box>
      <Hero />
      <NewArrivals />
      <Trending />
      <Benefit />
      <Promo />
      <TopSeller />
    </Box>
  );
};
