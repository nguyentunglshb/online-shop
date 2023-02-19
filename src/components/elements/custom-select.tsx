import React, { memo, useRef, useState } from "react";
import { Box, Center, Text, Icon, HStack } from "@chakra-ui/react";

import { ChervonUpIcon } from "@/assets";
import { useOnClickOutside } from "@/hooks";

export interface SelectOptionProps {
  label: string;
  subLabel: string;
  value: string;
  isActive: boolean;
  onChange: (value: string) => void;
}

export interface SelectProps {
  value: string;
  placeHolder: string;
  options: SelectOptionProps[];
  onChange: (value: string) => void;
}

const SelectOption = memo((props: SelectOptionProps) => {
  const { label, subLabel, value, isActive, onChange } = props;

  return (
    <HStack
      w="100%"
      h="48px"
      border="1px solid #EBEBEB"
      display="flex"
      px={4}
      justify="space-between"
      onClick={() => onChange(value)}
      transition=".3s ease-in-out"
      bg={isActive ? "neutral.7" : "#fbfbfb"}
      _hover={{
        bg: "neutral.7",
      }}
    >
      <Text>{label}</Text>
      <Text>{subLabel}</Text>
    </HStack>
  );
});

export const CustomSelect = memo((props: SelectProps) => {
  const { value, placeHolder, options, onChange } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectedOption = options.find((ot) => ot.value === value);

  return (
    <>
      <Center
        ref={ref}
        w="210px"
        pos="relative"
        h="48px"
        bgColor="#FBFBFB"
        border="1px solid #EBEBEB"
        onClick={toggleDropdown}
      >
        <HStack w="100%" px={4} justify="space-between">
          <Text>{value ? selectedOption?.label : placeHolder}</Text>
          {value ? (
            <Text>{selectedOption?.subLabel}</Text>
          ) : (
            <Box>
              <Icon as={ChervonUpIcon} />
            </Box>
          )}
        </HStack>
        <Box pos="absolute" top="100%" left={0} w="100%" zIndex={99}>
          {isOpen &&
            options.map((option) => {
              return (
                <SelectOption
                  key={option.value}
                  {...option}
                  isActive={value === option.value}
                  onChange={onChange}
                />
              );
            })}
        </Box>
      </Center>
    </>
  );
});
