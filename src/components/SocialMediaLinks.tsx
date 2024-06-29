import { LINKED_IN_PROFILE } from '@/config'
import { Link } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

export default function SocialMediaLinks(props:React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div {...props}>
        <Link href={LINKED_IN_PROFILE}><FaLinkedin size='2em'/></Link>
    </div>
  )
}
