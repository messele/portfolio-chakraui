// Sample card from Airbnb

import { AddIcon, ChatIcon, CheckIcon, DownloadIcon } from "@chakra-ui/icons"
import { Card, CardBody, CardHeader, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import TimelineRow, { TimelineRowProps } from "./TimelineRow"

interface TimelineProps {
  timelineData: TimelineRowProps[];
  timelineTitle:string;
  timelineAnnotation:string;
  timelineDescription:string;
}

const timelineData = [
    {
      logo: AddIcon,
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
      color: "brand.300",
    },
    {
      logo: ChatIcon,
      title: "New order #4219423",
      date: "21 DEC 11:21 PM",
      color: "blue.300",
    },
    {
      logo: DownloadIcon,
      title: "Server Payments for April",
      date: "21 DEC 9:28 PM",
      color: "orange.300",
    },
    {
      logo: CheckIcon,
      title: "New card added for order #3210145",
      date: "20 DEC 3:52 PM",
      color: "red.300",
    },
  ]

  
  const  Timeline:React.FC<TimelineProps> = ({timelineData, timelineAnnotation, timelineTitle,timelineDescription}) => {
    const textColor = useColorModeValue("gray.700", "white.300")
    const bgIconColor = useColorModeValue("white.300", "gray.700")
    // const bg = useColorModeValue("gray.50", "gray.700")
    const bg = useColorModeValue("inherit", "gray.700")
    return (
      <Card p="1rem" maxHeight="100%">
        <CardHeader pt="0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              {timelineTitle}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              <Text fontWeight="bold" as="span" color="brand.300">
                {timelineAnnotation}
              </Text>{" "}
              {timelineDescription}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody ps="26px" pe="0px" position="relative">
          <Flex direction="column">
            {timelineData.map((row, idx, arr) => {
              return (
                <TimelineRow
                  key={idx}
                  logo={row.logo}
                  title={row.title}
                  date={row.date}
                  color={row.color}
                  index={idx}
                  arrLength={arr.length}
                />
              )
            })}
          </Flex>
        </CardBody>
      </Card>
    )
  }

  export default Timeline;