/* eslint-disable @typescript-eslint/space-before-function-paren */
import Link from 'next/link'
import AnimationContainer from '../utils/AnimationContainer'
import ExternalLink from './ExternalLink'
import SocialIcon from '../../components/icons/social-icons'
import siteMetadata from '../../../data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="blog" href={siteMetadata.blog} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{' • '}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{' • '}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Personal Website
          </Link>
        </div>
      </div>
    </footer>
  )
}
