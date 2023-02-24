import React, { useRef, useState, useEffect, memo } from "react";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  As,
} from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { CartIcon, Images, MenuIcon, PowerOffIcon, UserIcon } from "@/assets";
import { NavigationFn } from "@/dictionary";
import { clearStoredAuth, getAvatar, getStoredAuth } from "@/libs";
import { colorOveride } from "@/libs/chakra/colors-overide";

type DrawerMenuItemProps = {
  label: string;
  icon: As;
  action: () => void;
};

export const Header = memo(() => {
  const headerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const [isSticky, setIsSticky] = useState(false);

  const logout = () => {
    clearStoredAuth();
    navigate(NavigationFn.LOGIN);
    onClose();
  };

  const drawerMenu: DrawerMenuItemProps[] = [
    {
      label: "Logout",
      icon: PowerOffIcon,
      action: logout,
    },
  ];

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
        <Link to={NavigationFn.HOME}>
          <Icon as={Images.logo} />
        </Link>

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
          <Box
            cursor="pointer"
            onClick={() =>
              navigate(
                getStoredAuth() ? NavigationFn.PROFILE : NavigationFn.LOGIN
              )
            }
          >
            {getAvatar() ? (
              <Avatar src={getAvatar()} size="sm" />
            ) : (
              <Icon as={UserIcon} />
            )}
          </Box>
          <Box cursor="pointer" onClick={() => navigate(NavigationFn.CART)}>
            <Icon as={CartIcon} />
          </Box>
          <Box cursor="pointer" onClick={onOpen}>
            <Icon as={MenuIcon} />
          </Box>
        </HStack>
      </HStack>

      {/* drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bgColor="white" p={0}>
            {drawerMenu.map((drawerItem) => {
              return <DrawerMenuItem key={drawerItem.label} {...drawerItem} />;
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
});

const DrawerMenuItem = memo((props: DrawerMenuItemProps) => {
  const { label, icon, action } = props;
  return (
    <HStack
      onClick={action}
      w="100%"
      px={4}
      py={4}
      justify="space-between"
      alignItems="center"
      transition=".3s ease-in-out"
      cursor="pointer"
      _hover={{
        bg: colorOveride.neutral[7],
      }}
    >
      <Icon as={icon} />
      <Text>{label}</Text>
    </HStack>
  );
});
