import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function SocialMediaLinks(props:React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div {...props} style={{zIndex:10, position:'absolute', right:"5%", top:'50%'}}>
        <FaFacebook />
        <FaLinkedin/>
    </div>
  )
}
