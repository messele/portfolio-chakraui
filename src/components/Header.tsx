"use client";
import {
  Flex,
  Stack,
  Link as ChakraLink,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <header>
      <Flex as="nav" color="white" padding={6} bg="gray.700">
        <Flex align="center">
          <NavLink href="./">Messele Bulcha</NavLink>
        </Flex>
        
        <Box
          display={{ base: "flex", md: "none" }}
          flexGrow={1}
          justifyContent="flex-end"
          onClick={handleToggle}
        >
          {!isOpen ? <HamburgerIcon/> : <CloseIcon/>}
        </Box>
        <Stack
          bg='inherit'
          rounded={'xs'}
          direction={{ base: "column", md: "row" }}
          display={{ base: "block", md: "flex" }}
          visibility={{base:isOpen?"visible":"hidden", md:"visible"}}
          position={{base:'absolute', md : 'relative'}}
          right ={{base:'0', md:'unset'}}
          width={{ base: "fit-content", md: "auto" }}
          alignItems="center"
          justifyContent={"flex-end"}
          flexGrow={{md:1}}
          mt={{ base: 12, md: 0 }}
          padding={{base:4, md:0}}
          zIndex={{base:10, md:0}}
          boxShadow={'base'}
          gap={4}
          transition='visiblity .5s .5s ease-in-out'
        > {[
            { text:'About', href:'./about'}, 
              {text:'Contact', href:'./contact'}
                
            ].map(k => <NavLink key={k.text} href={k.href} my={2}>{k.text}</NavLink>)}

        </Stack>
      </Flex>
    </header>
  );
}
