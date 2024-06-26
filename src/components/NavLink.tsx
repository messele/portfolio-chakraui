import React, { ReactNode } from 'react'
import {Link as ChakraLink, LinkProps, PropsOf} from "@chakra-ui/react"
import Link from 'next/link'

interface NavLinkProps extends LinkProps {
    href: string,
    children: ReactNode
}
const  NavLink :React.FC<NavLinkProps> = (({href, children, ...rest}) =>  {
  return (
    <ChakraLink as='div' {...rest}>
        <Link href={href}>{children}</Link>
  </ChakraLink>
  )
})


export default NavLink;
