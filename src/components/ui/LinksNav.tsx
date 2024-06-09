import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { type NavItemHeaderAnimation } from '../../types'

export const navItemsSelected: Record<string, NavItemHeaderAnimation> = {
  '/': {
    name: 'home',
    x: 1,
    y: -3,
    w: '60px',
  },
  '/about': {
    name: 'about',
    x: 65,
    y: -3,
    w: '61px',
  },
  '/projects': {
    name: 'projects',
    x: 130,
    y: -3,
    w: '82px',
  },
  '/blog': {
    name: 'blog',
    x: 216,
    y: -3,
    w: '50px',
  },
}

const LinksNav = () => {
  const pathname = usePathname() as string
  return (
    <>
      {Object.entries(navItemsSelected).map(([path, { name }]) => {
        const isActive = path === pathname

        return (
          <Link
            key={path}
            href={path}
            className={clsx(
              'ease hidden px-[10px] py-[2px] transition hover:text-neutral-200 lg:inline-block',
              {
                'text-neutral-500': !isActive,
                'font-bold': isActive,
              }
            )}
          >
            {name}
          </Link>
        )
      })}
    </>
  )
}

export default LinksNav
