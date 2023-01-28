import { Box } from "@chakra-ui/react";

import { Benefit, Hero, NewArrivals, Promo } from "../components";

export const HomePage = () => {
  return (
    <Box>
      <Hero />
      <NewArrivals />
      <Benefit />
      <Promo />
    </Box>
  );
};
