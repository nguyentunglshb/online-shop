import React, { memo, useRef, useState } from "react";
import { Box, Center, Text, Icon, HStack } from "@chakra-ui/react";

import { ChervonUpIcon } from "@/assets";
import { useOnClickOutside } from "@/hooks";

export interface SelectOptionProps {
  label: string;
  subLabel: string;
  value: string;
}

export interface SelectProps {
  placeHolder: string;
  options: SelectOptionProps[];
  onChange?: (value: string) => void;
}

const SelectOption = memo((props: SelectOptionProps) => {
  const { label, subLabel, value } = props;

  return <></>;
});

export const CustomSelect = memo((props: SelectProps) => {
  const { placeHolder, options } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <Center
      ref={ref}
      w="210px"
      h="48px"
      bgColor="#FBFBFB"
      border="1px solid #EBEBEB"
      onClick={toggleDropdown}
    >
      <HStack>
        <Text>{placeHolder}</Text>
        <Box>
          <Icon as={ChervonUpIcon} />
        </Box>
      </HStack>
    </Center>
  );
});
