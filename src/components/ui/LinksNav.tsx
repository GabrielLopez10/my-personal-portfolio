import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { type NavItemHeaderAnimation } from '../../types'

export const navItemsSelected: Record<string, NavItemHeaderAnimation> = {
  '/': {
    name: 'home',
    x: 1,
    y: -3,
    w: '60px'
  },
  '/about': {
    name: 'about',
    x: 1,
    y: -3,
    w: '60px'
  },
  '/projects': {
    name: 'projects',
    x: 1,
    y: -3,
    w: '60px'
  },
  '/blog': {
    name: 'blog',
    x: 1,
    y: -3,
    w: '60px'
  }
}

const LinksNav = () => {
  const pathname = usePathname() as string
  return (
    <>
      {
        Object.entries(navItemsSelected).map(([path, { name }]) => {
          const isActive = path === pathname

          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                'hidden lg:inline-block transition ease hover:text-neutral-200 py-[2px] px-[10px]',
                {
                  'text-neutral-500': !isActive,
                  'font-bold': isActive
                }
              )}>
              {name}
            </Link>
          )
        })
      }
    </>
  )
}

export default LinksNav
