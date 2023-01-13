import React, { useEffect, useRef, useState } from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";

import { CartIcon, Images, LikeIcon, SearchIcon, UserIcon } from "@/assets";

export const Header = () => {
  const headerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   if (window.pageYOffset >= headerRef.current.offsetTop) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // }, []);

  return (
    // <HStack
    //   px={8}
    //   py={4}
    //   ref={headerRef}
    //   pos={isSticky ? "sticky" : "unset"}
    //   top={0}
    //   left={0}
    //   //   bg="white"
    //   backdropFilter="blur(20px)"
    //   borderBottom="1px solid"
    //   borderColor="neutral.7"
    // >
    //   <Box w="100%">
    //     <Icon as={Logo} />
    //   </Box>
    //   <HStack spacing={6}>
    //     <Icon as={Search2Icon} viewBox="0 0 24 24" w={4} h={4} />
    //     <Avatar size="xs" bg="black" />
    //     <Icon as={CartIcon} w={4} h={4} />
    //   </HStack>
    // </HStack>
    <HStack py={4} justify="space-between" w="min(100%, 1589px)" m="0 auto">
      <HStack>
        <Icon as={Images.logo} />
        <HStack spacing={8} paddingTop="5px">
          <Text variant="headerTitle">Women</Text>
          <Text variant="headerTitle">Men</Text>
          <Text variant="headerTitle">Collection</Text>
          <Text variant="headerTitle">Outlet</Text>
        </HStack>
      </HStack>
      <HStack>
        <Icon as={CartIcon} />
        <Icon as={SearchIcon} />
        <Icon as={UserIcon} />
        <Icon as={LikeIcon} />
      </HStack>
    </HStack>
  );
};
