export interface TimelineEventProps {
  active?: boolean
  children: React.ReactNode
  last?: boolean
}

export interface ExternalLinkProps {
  href: string
  customClassName?: string
  children: React.ReactNode
}

export interface NavItemHeaderAnimation {
  name: string
  x: number
  y: number
  w: string
}

export interface NavItemProps {
  href: string
  text: string
}

export interface AnimationContainerProps {
  children: React.ReactNode
  customClassName?: string
  customDelay?: number
}

export interface CardProjectProps {
  id?: string
  title: string
  des: string
  category: string
  repo: string
  link: string
}

export interface CardProps {
  image: string
  title: string
  category: string
  repo: string
  link: string
}

export interface SlugProps {
  post: string[]
  blogPosts: string[]
}

export interface allBlogsProps {
  allBlogs: string[]
}
