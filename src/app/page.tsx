"use client";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import { NAME, JOB_TITLES } from "@/config";
import { Avatar, Fade, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const titleText = document.querySelectorAll(".animated-title");
    let lastTime = 0;
    for (let idx = 0; idx < titleText.length; idx++) {
      const span = titleText[idx] as HTMLElement;
      span.style.opacity = "0";
      setTimeout(() => {
        span.style.opacity = "1";
      }, idx * 200);

      lastTime = idx;
    }

    const jobTitles = document.querySelectorAll(".job-title");
    if (jobTitles.length < 1) return;
    let lastTitle: HTMLElement;
    let idx = 0;

    setTimeout(() => {
      setInterval(() => {
        idx > jobTitles.length - 1 && (idx = 0);
        lastTitle && (lastTitle.style.opacity = "0");
        let curr = jobTitles[idx] as HTMLElement;
        curr.style.opacity = "1";
        lastTitle = curr;
        idx++;
      }, 1000);
    }, lastTime * 200);
  }, []);

  return (
    <>
      <Flex flexDirection="column" margin="auto" height="100%" justifyContent='center' flexGrow={1}>
        <Avatar name={NAME} 
        margin="auto" 
        size="2xl"  
        src="./myPhoto.png"
        marginBottom={0} 
        marginTop={0}></Avatar>
        <Flex id="name" justifyContent="center">
          {NAME.split("").map((n, idx) => (
            <Text
              as="span"
              className="animated-title"
              fontSize={{base:"4xl", md:'6xl'}}
              style={{ transition: "0.5s 0.5s ease-in", opacity:0 }}
              key={idx}
              whiteSpace="break-spaces"
            >
              {n}
            </Text>
          ))}
        </Flex>

        <Fade in={true}>
          {JOB_TITLES.map((jt, idx) => (
            <Text className="job-title absolute opacity-0" 
            key={idx}
            fontSize='xl'>
              {jt}
            </Text>
          ))}
        </Fade>
        <SocialMediaLinks className="mt-10 mx-auto" />
      </Flex>
    </>
  );
}
