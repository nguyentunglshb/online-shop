import React, { useRef, useState, useEffect, memo } from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { CartIcon, Images, MenuIcon, UserIcon } from "@/assets";
import { NavigationFn } from "@/dictionary";

export const Header = memo(() => {
  const headerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (window.pageYOffset >= headerRef.current.offsetTop) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  return (
    <HStack
      py={4}
      w="100%"
      h="100px"
      ref={headerRef}
      pos={isSticky ? "sticky" : "unset"}
      top={0}
      left={0}
      backdropFilter="blur(20px)"
      zIndex={99}
    >
      <HStack w="min(100%, 1589px)" m="0 auto" justify="space-between">
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
    </HStack>
  );
});
