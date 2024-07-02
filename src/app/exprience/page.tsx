"use client"
import Timeline from "@/components/Timeline";
import { experience } from "@/exprience";
import { AddIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Stack,
  VStack,
  HStack,
  Flex,
  Badge,
  Link,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { LuWorkflow } from "react-icons/lu";
import { MdWork } from "react-icons/md";

export default function Exprience() {
  return (
    <Flex
      flexDirection="column"
      margin="0"
      height="100%"
      width="100%"
      padding={10}
      flexGrow={1}
      align="top"
    >
      <HStack className="justify-between gap-10" align="start" width="100%">
        <VStack marginRight="0" flexGrow={0} align="top" position="fixed">
          {/* Left TimeLine */}
          <Flex bg="white" padding={6} 
            flexWrap='wrap' flexDirection='column'>

            <Timeline 
              timelineTitle="Exprience Summary"
              timelineAnnotation="Over 14+ years"
              timelineDescription=""
              timelineData={experience.map((v,index)=> ({
                logo:MdWork,
                title:`${v.start}-${v.end}`,
                color:'gray.800',
                arrLength: experience.length,
                index,
              }))}
            />
          {/* {experience.map((v, idx) => (
            // <Link key={idx} href={`#${idx}`}>
            //   {v.start} - {v.end}
            // </Link>
          ))} */}
           </Flex>
        </VStack>

        <VStack flexGrow={1}>
          {experience.map((v, idx) => (
            <Card id={`${idx}`} key={idx} width="60%">
              <CardHeader>
                <Flex justifyContent="flex-end">
                  <Text alignSelf="left" flexGrow={1}>
                    {v.company}
                  </Text>
                  <Text>{`${v.start} - ${v.end}`}</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Accordion allowToggle={true}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {v.jobTitle}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {v.description}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </CardBody>
              <CardFooter gap="2" flexFlow="wrap">
                {v.skills.map((s, idx) => (
                  <Badge key={idx}>{s}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </VStack>
      </HStack>
    </Flex>
  );
}
