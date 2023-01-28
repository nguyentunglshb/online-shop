import React from "react";
import { Box, Stack, Icon, As, VStack, Text } from "@chakra-ui/react";

import {
  FingerPrintIcon,
  FreeShipIcon,
  RefundIcon,
  SupportIcon,
} from "@/assets";

interface BenefitItemProps {
  icon: As;
  title: string;
  subTitle: string;
}

const benefitList: Readonly<BenefitItemProps[]> = [
  {
    icon: FreeShipIcon,
    title: "Free Shipping",
    subTitle: "Enjoy free shipping on all orders above $100",
  },
  {
    icon: SupportIcon,
    title: "SUPPORT 24/7",
    subTitle: "Our support team is there to help you for queries",
  },
  {
    icon: RefundIcon,
    title: "30 DAYS RETURN",
    subTitle: "Simply return it within 30 days for an exchange.",
  },
  {
    icon: FingerPrintIcon,
    title: "100% PAYMENT SECURE",
    subTitle: "Our payments are secured with 256 bit encryption",
  },
];

const BenefitItem = (props: BenefitItemProps) => {
  const { icon, title, subTitle } = props;
  return (
    <Stack direction="row" w="25%" maxW="250px" spacing="22px">
      <Box>
        <Icon as={icon} />
      </Box>
      <VStack align="flex-start">
        <Text variant="benefitTitle">{title}</Text>
        <Text>{subTitle}</Text>
      </VStack>
    </Stack>
  );
};

export const Benefit = () => {
  return (
    <Box py="70px">
      <Stack
        direction="row"
        w="min(100%, 1589px)"
        m="0 auto"
        justify="space-between"
      >
        {benefitList.map((benefit) => {
          return <BenefitItem key={benefit.title} {...benefit} />;
        })}
      </Stack>
    </Box>
  );
};
