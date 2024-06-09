'use client'

import useScrollPosition from '../../hooks/useScrollPosition'
import { motion } from 'framer-motion'

const animation = {
  hide: { y: -8, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
}

const HeaderAnimation = ({ children }: { children: React.ReactNode }) => {
  const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

  const scrollPosition = useScrollPosition()

  return (
    <motion.header
      className={classNames(
        scrollPosition > 0 ? 'bg-black/20 backdrop-blur-md' : '',
        'sticky top-0 z-10 mx-auto flex w-full flex-col items-center justify-center transition ease-in-out'
      )}
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.header>
  )
}

export default HeaderAnimation
