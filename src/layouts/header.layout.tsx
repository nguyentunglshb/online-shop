import React, { useRef, useState } from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { CartIcon, Images, MenuIcon, UserIcon } from "@/assets";
import { NavigationFn } from "@/dictionary";

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
    <HStack
      py={4}
      justify="space-between"
      w="min(100%, 1589px)"
      m="0 auto"
      h="100px"
    >
      <Icon as={Images.logo} />

      <HStack spacing={8} paddingTop="5px">
        <NavLink to={NavigationFn.HOME}>
          <Text variant="headerTitle">Home</Text>
        </NavLink>
        <NavLink to={NavigationFn.WOMEN}>
          <Text variant="headerTitle">Women</Text>
        </NavLink>
        <NavLink to={NavigationFn.MEN}>
          <Text variant="headerTitle">Men</Text>
        </NavLink>
        <NavLink to={NavigationFn.ABOUT}>
          <Text variant="headerTitle">About</Text>
        </NavLink>
        <NavLink to={NavigationFn.CONTACT_US}>
          <Text variant="headerTitle">Contact us</Text>
        </NavLink>
        {/* <Text variant="headerTitle">Collection</Text> */}
        {/* <Text variant="headerTitle">Outlet</Text> */}
      </HStack>
      <HStack spacing={8}>
        <Icon as={UserIcon} />
        <Icon as={CartIcon} />
        <Icon as={MenuIcon} />
      </HStack>
    </HStack>
  );
};
