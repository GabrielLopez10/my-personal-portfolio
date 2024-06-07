/* eslint-disable @typescript-eslint/indent */
import Link from 'next/link'
import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

const CustomLink = ({
  href,
  ...rest
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const isInternalLink = href && href.startsWith('/')
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const isAnchorLink = href && href.startsWith('#')

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (isInternalLink) {
    return (
      <Link legacyBehavior href={href}>
        <a {...rest} />
      </Link>
    )
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />
}

export default CustomLink
