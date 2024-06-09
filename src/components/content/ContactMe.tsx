import AnimationContainer from '../utils/AnimationContainer'

const ContactMe = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <h2
        className="mb-8 text-center text-2xl font-bold tracking-tight text-white md:text-2xl lg:text-start"
        id="contact"
      >
        Contact me
      </h2>

      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between pb-5">
        <div className="mb-10 flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
          <a
            href="mailto:gastonlopez436@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <div className="ease rounded border border-gray-800 bg-[#080809] p-4 shadow-sm transition hover:border-gray-900 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6">
              <h6 className="text-1xl text-start font-bold tracking-tight text-white">Email</h6>
              <p className="mt-2 text-base text-gray-400">gastonlopez436@gmail.com</p>
            </div>
          </a>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <form action="https://formspree.io/f/mbjvzkpy" method="POST" className="w-full space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="ease w-full rounded border border-gray-900 bg-black p-3 text-base text-white outline-none transition focus:border-gray-800"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="ease w-full rounded border border-gray-900 bg-black p-3 text-base text-white outline-none transition focus:border-gray-800"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="ease h-32 w-full rounded border border-gray-900 bg-black p-3 text-base text-white outline-none transition focus:border-gray-800"
                placeholder="Message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="ease mx-auto flex items-center justify-center rounded bg-black px-5 py-3 text-white shadow-sm transition hover:bg-gray-900"
            >
              <span className="text-base font-medium">Send</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </AnimationContainer>
  )
}

export default ContactMe
