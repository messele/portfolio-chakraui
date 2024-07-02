import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export interface TimelineRowProps {
  logo: React.ElementType;
  title: string;
  date?: string;
  color: string;
  index: number;
  arrLength: number;
}
const TimelineRow: React.FC<TimelineRowProps> = ({
  logo,
  title,
  date,
  color,
  index,
  arrLength,
}) => {
  const textColor = useColorModeValue("gray.700", "white.300");
  const bgIconColor = useColorModeValue("white.300", "gray.700");

  return (
    <Link href={`#${index}`}>
      <Flex alignItems="center" minH="78px" justifyContent="start" mb="5px">
        <Flex direction="column" h="100%">
          <Icon
            as={logo}
            bg={bgIconColor}
            color={color}
            h={"30px"}
            w={"26px"}
            pe="6px"
            zIndex="1"
            position="relative"
            right={document.documentElement.dir === "rtl" ? "-8px" : ""}
            left={document.documentElement.dir === "rtl" ? "" : "-8px"}
          />
          <Box
            w="2px"
            bg="gray.200"
            h={index === arrLength - 1 ? "15px" : "100%"}
          />
        </Flex>
        <Flex direction="column" justifyContent="flex-start" h="100%">
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            {title}
          </Text>
          {date && (
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {date}
            </Text>
          )}
        </Flex>
      </Flex>
    </Link>
  );
};

export default TimelineRow;
