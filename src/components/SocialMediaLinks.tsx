import { EMAIL, LINKED_IN_PROFILE } from '@/config'
import { Box, IconButton, Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const mediaLinks = [

  {
    name:'linkedIn',
    icon:<BsLinkedin />,
    href:LINKED_IN_PROFILE
  },
  {
    name:'email',
    icon:<MdEmail/>,
    href:`mailto:${EMAIL}`
  },
  
]

export default function SocialMediaLinks(props:React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div {...props}>
       {
        mediaLinks.map(l =>
          <Box as="a" key={l.name} href={l.href}>
          <IconButton
            aria-label={l.name}
            variant="ghost"
            fontSize="2xl"
            icon={l.icon}
            _hover={{
              bg: "blue.200",
              //color: useColorModeValue("inherit", "gray.700"),
            }}
            isRound
          />
        </Box>
         )
       }
       
    </div>
  )
}
