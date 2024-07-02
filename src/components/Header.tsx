"use client";
import {
  Flex,
  Stack,
  Box,
  useDisclosure,
  Avatar,
  FormControl,
  IconButton,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import NavLink from "./NavLink";
import { NAME } from "@/config";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <header className="min-w-full">
      <Flex as="nav" color="white" padding={6} bg="gray.700">
        <Flex align="center">
          <NavLink href="./">
            {" "}
            <Avatar
              name={NAME}
              margin="auto"
              size="md"
              src="./myPhoto.png"
              marginBottom={0}
              marginTop={0}
            ></Avatar>
          </NavLink>
        </Flex>

        <Box
          display={{ base: "flex", md: "none" }}
          flexGrow={1}
          justifyContent="flex-end"
          onClick={handleToggle}
        >
          {!isOpen ? <HamburgerIcon /> : <CloseIcon />}
        </Box>
        <Stack
          bg="inherit"
          rounded={"xs"}
          direction={{ base: "column", md: "row" }}
          display={{ base: "block", md: "flex" }}
          visibility={{ base: isOpen ? "visible" : "hidden", md: "visible" }}
          position={{ base: "absolute", md: "relative" }}
          right={{ base: "0", md: "unset" }}
          width={{ base: "fit-content", md: "auto" }}
          alignItems="center"
          justifyContent={"flex-end"}
          flexGrow={{ md: 1 }}
          mt={{ base: 12, md: 0 }}
          padding={{ base: 4, md: 0 }}
          zIndex={{ base: 10, md: 0 }}
          boxShadow={"base"}
          gap={4}
          transition="visiblity .5s .5s ease-in-out"
        >
          {" "}
          {[
            { text: "Home", href: "./" },
            { text: "About", href: "./about" },
            { text: "Exprience", href: "./exprience" },
          ].map((k) => (
            <NavLink key={k.text} href={k.href} my={2}>
              {k.text}
            </NavLink>
          ))}
        </Stack>
      </Flex>
    </header>
  );
}
