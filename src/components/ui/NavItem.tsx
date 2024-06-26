'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import LinksNav, { navItemsSelected } from './LinksNav'

const NavItem = () => {
  let pathname = usePathname() as string

  if (pathname.includes('/blog')) pathname = '/blog'

  return (
    <>
      {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        navItemsSelected[pathname] ? (
          <>
            <div className="hidden lg:block">
              <motion.div
                className="absolute z-[-1] h-[34px] rounded-md bg-neutral-800"
                layoutId="test2"
                initial={{
                  opacity: 0,
                  x: navItemsSelected[pathname].x,
                  y: navItemsSelected[pathname].y,
                }}
                animate={{
                  opacity: 1,
                  x: navItemsSelected[pathname].x,
                  width: navItemsSelected[pathname].w,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            </div>
          </>
        ) : // eslint-disable-next-line @typescript-eslint/indent
        null
      }
      {<LinksNav />}
    </>
  )
}

export default NavItem
