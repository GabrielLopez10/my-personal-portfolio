'use client'

import { usePathname } from 'next/navigation'

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)

  const meta = {
    title: `Gabriel Lopez ${pathname === '/' ? '' : '. ' + titleFixedToShow}`,
    description:
      "Hi! My name is Gabriel Lopez, I'm a software developer and this is my personal portfolio.",
    keywords:
      'Gabriel Lopez, Gabriel Lopez portfolio, Gabriel Lopez portfolio, Gabriel Lopez github, Gabriel Lopez Linkedin, Web, Frontend Developer, Backend Developer, CSS, HTML, JavaScript, Python',
    type: 'website',
  }

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
    </>
  )
}

export default Head
