"use client";

import { Text, TextProps } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolve } from "path";
import React, { useEffect, useState } from "react";
import { FaICursor } from "react-icons/fa";
import { LuTextCursor } from "react-icons/lu";

interface AnimatedTextProps extends TextProps {
  text: Array<string>;
  effect?: EffectType;
  disableAnimation?: boolean;
  containerClass?: string;
  delay? : number;
  onDone?: () => void;
}

type EffectType = "type" | "zoom_out" | "fade";

const AnimationResolver = {
  fade: {
    onStart: (element: HTMLElement) => (element.style.opacity = "0"),
    onEnd: (element: HTMLElement) => (element.style.opacity = "1"),
    delay:150
  },
  zoom_out: {
    onStart: (element: HTMLElement) => {element.style.scale = "0"; element.style.display='block'},
    onEnd: (element: HTMLElement) => (element.style.scale = "1"),
    delay:200
  },
  type: {
    onStart: (element: HTMLElement) => (element.style.display = "none"),
    onEnd: (element: HTMLElement) => (element.style.display = "block"),
    delay:50
  },
};
const animate = (
  type: EffectType,
  elements: NodeListOf<Element>,
  delay:number = 0,
  onDone: () => void
) => {
  const resolver = AnimationResolver[type];
  for (let idx = 0; idx < elements.length; idx++) {
    const element = elements[idx] as HTMLElement;
    resolver.onStart(element);
    setTimeout(() => {
      resolver.onEnd(element);
      if (idx === elements.length - 1) {
        onDone && onDone();
      }
    }, (idx * resolver.delay) + delay);
  }
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  effect = "type",
  onDone = () => {},
  disableAnimation,
  flexDirection,
  containerClass,
  delay,
  ...rest
}) => {
  useEffect(() => {
    if (!disableAnimation) {
      const container = document.querySelectorAll(".animated-text");
      animate(effect, container, delay, () => {
        setIsDone(true);
        onDone();
      });
    }
  }, [effect, disableAnimation, onDone, delay]);

  const [isDone, setIsDone] = useState(false);
  return (
    <div className={`relative flex ${containerClass || ''}`}>
    {/* {disableAnimation && <Text as="span" {...rest}>{text}</Text>} */}
     {
    //  !disableAnimation &&  
     text.map((n: string, idx: number) => (
        <Text
          as="span"
          className={`${disableAnimation ? '': "animated-text"}`}
          fontSize={{ base: "4xl", md: "6xl" }}
          style={{ transition: disableAnimation ? 'none': "0.5s 0.5s ease-in",
            display: disableAnimation ? 'block': 'none'
          }}
          key={idx}
          whiteSpace="break-spaces"
          {...rest}
        >
          {n}
        </Text>
      ))}
      {effect === "type" && !isDone && !disableAnimation && (
        <LuTextCursor

          className="-mr-1 stroke-width-1 -right-3 my-auto"
          cursor={2}
          size={25}
          strokeWidth={2}
        />
      )}
    </div>
  );
};

export default AnimatedText;
