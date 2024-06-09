import '../../src/styles/globals.css'

import Link from 'next/link'

const PageNotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl tracking-tight text-white">404</h1>

        <p className="mt-3 text-2xl font-bold tracking-tight text-gray-400 sm:text-4xl">
          Error... Try Again
        </p>

        <p className="mt-4 text-gray-400">We can¬apos;t find that page.</p>

        <Link
          href="/"
          className="ease mt-6 inline-block rounded bg-gray-900 px-5 py-3 text-sm font-medium text-white outline-none transition-all delay-75 hover:bg-black"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
