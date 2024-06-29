"use client";
import AnimatedText from "@/components/AnimatedText";
import { ABOUT } from "@/config";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function About() {
  const [titleAnimationDone, setTitleAnimationDone] = useState(false);
  return (
    <Box
      margin="auto"
      // direction={"column"}
      maxWidth={"70%"}
      height={"max-content"}
    >
       <AnimatedText
        // key={idx}
        onDone={() => setTitleAnimationDone(true)}
        text={ABOUT[0].split("")}
        effect="type"
        disableAnimation={titleAnimationDone}
        // fontFamily={"courier"}
        fontSize="3xl"
      />
    
        <AnimatedText
          onDone={() => setTitleAnimationDone(true)}
          text={ABOUT.slice(1, ABOUT.length)}
          effect="zoom_out"
          disableAnimation={!titleAnimationDone}
          // fontFamily={"courier"}
          fontSize="xl"
          delay={1000}
          marginBottom={1}
          containerClass={`flex-col ${!titleAnimationDone ? 'opacity-0' :''}`}
          // className = {`${titleAnimationDone ? 'block': 'none'}`}
        />
    </Box>
  );
}
