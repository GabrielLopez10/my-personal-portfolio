import Link from 'next/link'
import HeaderAnimation from '../utils/HeaderAnimation'
import MobileMenuNav from './MobileMenuNav'
import NavItem from './NavItem'
const Header = () => {
  return (
    <HeaderAnimation>
      <nav className="relative flex w-10/12 flex-row items-center justify-between gap-5 border-gray-700 bg-opacity-60 py-8 text-gray-100 sm:pb-8 lg:max-w-screen-md lg:gap-0">
        <div>
          <h1>
            <Link href="/">
              <strong>Gabriel López</strong>()
            </Link>
          </h1>
        </div>

        <div className="ml-[-0.80rem]">
          <MobileMenuNav />

          <NavItem />
        </div>
      </nav>
    </HeaderAnimation>
  )
}

export default Header
